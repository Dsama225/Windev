import { reactive } from 'vue';
import { createPageComponent, normalizePageComponent } from '../data/pageEditorComponents';
import { adminCmsService } from '../services/adminCmsService';
import { collectComponentAssetPaths, deleteCmsAsset, deleteCmsAssets } from '../utils/cmsAssets';

function reorderArray(arr, fromIndex, toIndex) {
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= arr.length || toIndex >= arr.length) {
        return;
    }
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, item);
}

function duplicateArrayItem(arr, index, mutateClone) {
    const source = arr[index];
    if (!source) {
        return;
    }
    const clone = JSON.parse(JSON.stringify(source));
    if (mutateClone) {
        mutateClone(clone);
    }
    arr.splice(index + 1, 0, clone);
}

export function createEmptySection(id = 'section') {
    return {
        id,
        title: '',
        body: '',
        paragraphs: [],
        list: [],
        table: null,
        cards: [],
    };
}

export function createEmptySectionCard() {
    return {
        title: '',
        body: '',
        image_src: '',
        image_alt: '',
        link: '',
        link_label: '',
    };
}

export function createEmptyDocument(index = 0) {
    return {
        id: `doc-${index + 1}`,
        label: '',
        url: '',
        filename: '',
        mime: 'application/pdf',
        size: 0,
    };
}

export function createPageEditorState() {
    const form = reactive({
        title: '',
        meta_description: '',
        status: 'published',
    });

    const alertForm = reactive({
        text: '',
        link: '',
        link_label: '',
    });

    const heroForm = reactive({
        eyebrow: '',
        title: '',
        subtitle: '',
        image_src: '',
        image_alt: '',
    });

    const sections = reactive([]);

    const components = reactive([]);

    const links = reactive([]);

    const media = reactive([]);

    const features = reactive([]);

    const resourceLinks = reactive([]);

    const publicationBody = reactive({ html: '' });

    const documents = reactive([]);

    const homeForm = reactive({
        cta_title: '',
        cta_text: '',
        cta_link: '',
        note: '',
    });

    function hydrateFromPage(data) {
        form.title = data.title ?? '';
        form.meta_description = data.meta_description ?? '';
        form.status = data.status ?? 'published';

        const payload = data.payload ?? {};
        const alert = payload.alert ?? {};
        alertForm.text = alert.text ?? '';
        alertForm.link = alert.link ?? '';
        alertForm.link_label = alert.link_label ?? '';

        const hero = payload.hero ?? {};
        heroForm.eyebrow = hero.eyebrow ?? '';
        heroForm.title = hero.title ?? '';
        heroForm.subtitle = hero.subtitle ?? '';
        const heroMedia = (payload.media ?? []).find((m) => m.role === 'hero');
        heroForm.image_src = heroMedia?.src ?? hero.image_src ?? '';
        heroForm.image_alt = heroMedia?.alt ?? hero.image_alt ?? '';

        const rawComponents = payload.components ?? [];
        if (rawComponents.length) {
            components.splice(0, components.length, ...rawComponents.map((c, i) => normalizePageComponent(c, i)));
        } else {
            const legacy = [];
            for (const card of payload.product_cards ?? []) {
                legacy.push(normalizePageComponent({
                    type: 'card',
                    image_src: card.image_src ?? card.image ?? '',
                    title: card.title ?? '',
                    body: card.body ?? card.text ?? '',
                    link: card.link ?? card.to ?? '',
                    link_label: card.link_label ?? '',
                }, legacy.length));
            }
            for (const slide of payload.hero_slides ?? []) {
                legacy.push(normalizePageComponent({
                    type: 'carousel',
                    slides: [{
                        image_src: slide.image_src ?? slide.image ?? '',
                        title: slide.title ?? '',
                        body: slide.body ?? slide.text ?? '',
                    }],
                }, legacy.length));
            }
            components.splice(0, components.length, ...legacy);
        }

        sections.splice(0, sections.length, ...(payload.sections ?? []).map((s, i) => ({
            id: s.id ?? `section-${i}`,
            title: s.title ?? '',
            body: s.body ?? '',
            paragraphs: Array.isArray(s.paragraphs) ? [...s.paragraphs] : [],
            list: Array.isArray(s.list) ? [...s.list] : [],
            table: s.table ? { headers: [...(s.table.headers ?? [])], rows: (s.table.rows ?? []).map((r) => [...r]) } : null,
            cards: Array.isArray(s.cards) ? JSON.parse(JSON.stringify(s.cards)) : [],
        })));

        links.splice(0, links.length, ...(payload.links ?? []).map((l) => ({
            label: l.label ?? '',
            type: l.type ?? 'internal',
            target: l.target ?? l.to ?? '',
        })));

        const nonHeroMedia = (payload.media ?? []).filter((m) => m.role !== 'hero');
        media.splice(0, media.length, ...nonHeroMedia.map((m) => ({
            role: m.role ?? 'image',
            src: m.src ?? '',
            alt: m.alt ?? '',
        })));

        features.splice(0, features.length, ...(payload.features ?? []).map((f) => ({
            label: f.label ?? '',
            value: f.value ?? '',
        })));

        resourceLinks.splice(0, resourceLinks.length, ...(payload.resource_links ?? []).map((g) => ({
            group: g.group ?? '',
            links: (g.links ?? []).map((l) => ({
                label: l.label ?? '',
                type: l.type ?? 'internal',
                target: l.target ?? l.to ?? '',
            })),
        })));

        publicationBody.html = payload.body ?? '';

        documents.splice(0, documents.length, ...(payload.documents ?? []).map((doc, i) => ({
            id: doc.id ?? `doc-${i + 1}`,
            label: doc.label ?? doc.title ?? '',
            url: doc.url ?? doc.path ?? '',
            filename: doc.filename ?? '',
            mime: doc.mime ?? 'application/pdf',
            size: doc.size ?? 0,
        })));

        const cta = payload.cta ?? {};
        homeForm.cta_title = cta.title ?? '';
        homeForm.cta_text = cta.text ?? '';
        homeForm.cta_link = cta.link ?? '';
        homeForm.note = payload.note ?? '';
    }

    function buildPayload(existingPayload = {}) {
        const payload = { ...existingPayload };

        payload.alert = alertForm.text
            ? { text: alertForm.text, link: alertForm.link, link_label: alertForm.link_label }
            : null;

        payload.hero = {
            ...(payload.hero ?? {}),
            eyebrow: heroForm.eyebrow,
            title: heroForm.title,
            subtitle: heroForm.subtitle,
        };

        payload.components = components.map((c) => {
            if (c.type === 'carousel') {
                return {
                    id: c.id,
                    type: 'carousel',
                    slides: (c.slides ?? []).filter((s) => s.image_src?.trim() || s.title?.trim() || s.body?.trim()),
                };
            }
            if (c.type === 'button') {
                return {
                    id: c.id,
                    type: 'button',
                    label: c.label,
                    target: c.target,
                    variant: c.variant ?? 'primary',
                };
            }
            if (c.type === 'section') {
                return {
                    id: c.id,
                    type: 'section',
                    title: c.title,
                    body: c.body,
                };
            }

            return {
                id: c.id,
                type: 'card',
                image_src: c.image_src,
                image_alt: c.image_alt,
                title: c.title,
                body: c.body,
                link: c.link,
                link_label: c.link_label,
            };
        }).filter((c) => {
            if (c.type === 'carousel') {
                return c.slides.length > 0;
            }
            if (c.type === 'button') {
                return c.label?.trim();
            }
            if (c.type === 'section') {
                return c.title?.trim() || c.body?.trim();
            }

            return c.title?.trim() || c.body?.trim() || c.image_src?.trim();
        });

        payload.sections = sections.map((s) => {
            const section = {
                id: s.id,
                title: s.title,
            };
            if (s.body?.trim()) {
                section.body = s.body;
            }
            if (s.paragraphs?.length) {
                section.paragraphs = s.paragraphs.filter(Boolean);
            }
            if (s.list?.length) {
                section.list = s.list.filter(Boolean);
            }
            if (s.table?.headers?.length) {
                section.table = s.table;
            }
            if (s.cards?.length) {
                section.cards = s.cards;
            }
            return section;
        });

        payload.links = links
            .filter((l) => l.label?.trim())
            .map((l) => ({
                label: l.label,
                type: l.type,
                target: l.target,
            }));

        const mediaItems = media.filter((m) => m.src?.trim()).map((m) => ({
            role: m.role,
            src: m.src,
            alt: m.alt,
        }));
        if (heroForm.image_src?.trim()) {
            mediaItems.unshift({
                role: 'hero',
                src: heroForm.image_src,
                alt: heroForm.image_alt,
            });
        }
        payload.media = mediaItems;

        payload.features = features.filter((f) => f.label?.trim());
        payload.resource_links = resourceLinks
            .filter((g) => g.group?.trim() || g.links?.length)
            .map((g) => ({
                group: g.group,
                links: g.links.filter((l) => l.label?.trim()),
            }));

        if (publicationBody.html?.trim()) {
            payload.body = publicationBody.html;
        }

        if (homeForm.cta_title || homeForm.cta_text || homeForm.cta_link) {
            payload.cta = {
                title: homeForm.cta_title,
                text: homeForm.cta_text,
                link: homeForm.cta_link,
            };
        }
        if (homeForm.note?.trim()) {
            payload.note = homeForm.note;
        }

        payload.documents = documents
            .filter((doc) => doc.url?.trim())
            .map((doc) => ({
                id: doc.id,
                label: doc.label?.trim() || doc.filename || 'Document',
                url: doc.url,
                filename: doc.filename,
                mime: doc.mime,
                size: doc.size,
            }));

        return payload;
    }

    return {
        form,
        alertForm,
        heroForm,
        sections,
        components,
        links,
        media,
        features,
        resourceLinks,
        publicationBody,
        documents,
        homeForm,
        hydrateFromPage,
        buildPayload,
        addSection() {
            sections.push(createEmptySection(`section-${sections.length + 1}`));
        },
        async removeSection(index, routeName) {
            const section = sections[index];
            const imagePaths = (section?.cards ?? []).map((card) => card.image_src).filter(Boolean);
            await deleteCmsAssets(routeName, imagePaths);
            sections.splice(index, 1);
        },
        moveSection(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= sections.length) {
                return;
            }
            const [item] = sections.splice(index, 1);
            sections.splice(target, 0, item);
        },
        reorderSections(fromIndex, toIndex) {
            reorderArray(sections, fromIndex, toIndex);
        },
        duplicateSection(index) {
            duplicateArrayItem(sections, index, (clone) => {
                clone.id = `section-${sections.length + 1}`;
            });
        },
        addSectionCard(sectionIndex) {
            const section = sections[sectionIndex];
            if (!section) {
                return;
            }
            if (!Array.isArray(section.cards)) {
                section.cards = [];
            }
            section.cards.push(createEmptySectionCard());
        },
        async removeSectionCard(sectionIndex, cardIndex, routeName) {
            const section = sections[sectionIndex];
            const card = section?.cards?.[cardIndex];

            if (card?.image_src) {
                await deleteCmsAsset(routeName, card.image_src);
            }

            section?.cards?.splice(cardIndex, 1);
        },
        async uploadDocument(file, routeName) {
            const asset = await adminCmsService.uploadAsset(routeName, file, 'document');
            const doc = {
                id: `doc-${documents.length + 1}`,
                label: file.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' '),
                url: asset.url ?? asset.path ?? '',
                filename: asset.filename ?? file.name,
                mime: asset.mime ?? 'application/pdf',
                size: asset.size ?? file.size,
            };
            documents.push(doc);

            return doc;
        },
        async removeDocument(index, routeName) {
            const doc = documents[index];

            if (!doc) {
                return;
            }

            if (doc.url) {
                await deleteCmsAsset(routeName, doc.url);

                for (let i = links.length - 1; i >= 0; i -= 1) {
                    if (links[i].type === 'document' && links[i].target === doc.url) {
                        links.splice(i, 1);
                    }
                }
            }

            documents.splice(index, 1);
        },
        addLinkFromDocument(doc) {
            links.push({
                label: doc.label || doc.filename || 'Document PDF',
                type: 'document',
                target: doc.url,
            });
        },
        addComponent(type = 'card', preset = {}) {
            components.push(createPageComponent(type, components.length, preset));
        },
        async removeComponent(index, routeName) {
            const component = components[index];
            await deleteCmsAssets(routeName, collectComponentAssetPaths(component));
            components.splice(index, 1);
        },
        duplicateComponent(index) {
            const source = components[index];
            if (!source) {
                return;
            }
            const clone = JSON.parse(JSON.stringify(source));
            clone.id = `comp-${components.length + 1}`;
            components.splice(index + 1, 0, clone);
        },
        moveComponent(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= components.length) {
                return;
            }
            const [item] = components.splice(index, 1);
            components.splice(target, 0, item);
        },
        reorderComponents(fromIndex, toIndex) {
            reorderArray(components, fromIndex, toIndex);
        },
        addCarouselSlide(componentIndex) {
            const component = components[componentIndex];
            if (!component?.slides) {
                component.slides = [];
            }
            component.slides.push({ image_src: '', title: '', body: '' });
        },
        async removeCarouselSlide(componentIndex, slideIndex, routeName) {
            const component = components[componentIndex];
            if (!component?.slides || component.slides.length <= 1) {
                return;
            }

            const slide = component.slides[slideIndex];
            if (slide?.image_src) {
                await deleteCmsAsset(routeName, slide.image_src);
            }

            component.slides.splice(slideIndex, 1);
        },
        addLink() {
            links.push({ label: '', type: 'internal', target: '' });
        },
        removeLink(index) {
            links.splice(index, 1);
        },
        moveLink(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= links.length) {
                return;
            }
            const [item] = links.splice(index, 1);
            links.splice(target, 0, item);
        },
        reorderLinks(fromIndex, toIndex) {
            reorderArray(links, fromIndex, toIndex);
        },
        duplicateLink(index) {
            duplicateArrayItem(links, index);
        },
        addMedia() {
            media.push({ role: 'image', src: '', alt: '' });
        },
        async removeMedia(index, routeName) {
            const item = media[index];

            if (item?.src) {
                await deleteCmsAsset(routeName, item.src);
            }

            media.splice(index, 1);
        },
        moveMedia(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= media.length) {
                return;
            }
            const [item] = media.splice(index, 1);
            media.splice(target, 0, item);
        },
        reorderMedia(fromIndex, toIndex) {
            reorderArray(media, fromIndex, toIndex);
        },
        duplicateMedia(index) {
            duplicateArrayItem(media, index);
        },
        addFeature() {
            features.push({ label: '', value: '' });
        },
        removeFeature(index) {
            features.splice(index, 1);
        },
        moveFeature(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= features.length) {
                return;
            }
            const [item] = features.splice(index, 1);
            features.splice(target, 0, item);
        },
        reorderFeatures(fromIndex, toIndex) {
            reorderArray(features, fromIndex, toIndex);
        },
        duplicateFeature(index) {
            duplicateArrayItem(features, index);
        },
        addResourceGroup() {
            resourceLinks.push({ group: '', links: [] });
        },
        removeResourceGroup(index) {
            resourceLinks.splice(index, 1);
        },
        moveResourceGroup(index, direction) {
            const target = index + direction;
            if (target < 0 || target >= resourceLinks.length) {
                return;
            }
            const [item] = resourceLinks.splice(index, 1);
            resourceLinks.splice(target, 0, item);
        },
        reorderResourceGroups(fromIndex, toIndex) {
            reorderArray(resourceLinks, fromIndex, toIndex);
        },
        duplicateResourceGroup(index) {
            duplicateArrayItem(resourceLinks, index);
        },
        addResourceLink(groupIndex) {
            resourceLinks[groupIndex].links.push({ label: '', type: 'internal', target: '' });
        },
        removeResourceLink(groupIndex, linkIndex) {
            resourceLinks[groupIndex].links.splice(linkIndex, 1);
        },
        moveResourceLink(groupIndex, linkIndex, direction) {
            const group = resourceLinks[groupIndex];
            if (!group?.links) {
                return;
            }
            const target = linkIndex + direction;
            if (target < 0 || target >= group.links.length) {
                return;
            }
            const [item] = group.links.splice(linkIndex, 1);
            group.links.splice(target, 0, item);
        },
        reorderResourceLinks(groupIndex, fromIndex, toIndex) {
            const group = resourceLinks[groupIndex];
            if (group?.links) {
                reorderArray(group.links, fromIndex, toIndex);
            }
        },
        duplicateResourceLink(groupIndex, linkIndex) {
            const group = resourceLinks[groupIndex];
            if (group?.links) {
                duplicateArrayItem(group.links, linkIndex);
            }
        },
    };
}
