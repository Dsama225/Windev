import { computed } from 'vue';
import { useCmsPageWithFallback } from './useCmsPageWithFallback';

export function useHomePageCms(statics) {
    const cms = useCmsPageWithFallback('home');

    const cmsAlertPayload = computed(() => {
        if (!cms.integrationEnabled.value || !cms.alert.value?.text) {
            return null;
        }

        return cms.alert.value;
    });

    const platformEyebrow = computed(() => cms.pickField(cms.hero.value?.eyebrow, statics.platformEyebrow));
    const platformTitle = computed(() => cms.pickField(cms.hero.value?.title, statics.platformTitle));

    const platformCtaText = computed(() => {
        const cta = cms.page.value?.payload?.cta;

        if (cms.integrationEnabled.value && cta?.text) {
            return cta.text;
        }

        return statics.platformCtaText;
    });

    const platformCtaLink = computed(() => {
        const cta = cms.page.value?.payload?.cta;

        if (cms.integrationEnabled.value && cta?.link) {
            return cta.link;
        }

        return statics.platformCtaLink;
    });

    const showCmsComponents = computed(() => cms.integrationEnabled.value && cms.components.value.length > 0);

    cms.applyDocumentTitle(statics.documentTitle);

    return {
        ...cms,
        cmsAlertPayload,
        platformEyebrow,
        platformTitle,
        platformCtaText,
        platformCtaLink,
        showCmsComponents,
    };
}
