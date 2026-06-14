import { computed } from 'vue';
import { useCmsPageWithFallback } from './useCmsPageWithFallback';

/**
 * Intégration CMS additive pour les pages produit (étape 5).
 * Conserve le rendu statique tant que la route n'est pas dans CMS_PUBLIC_ROUTES ou sans contenu CMS.
 */
export function useProductPageCms(routeName, statics) {
    const cms = useCmsPageWithFallback(routeName);

    const introHeroTitle = computed(() => cms.pickField(cms.hero.value?.title, statics.introHero));
    const introHeadingText = computed(() => cms.pickField(cms.hero.value?.eyebrow, statics.introHeading));
    const introBodyText = computed(() => cms.pickField(cms.hero.value?.subtitle, statics.introBody));

    const cmsAlertPayload = computed(() => {
        if (!cms.integrationEnabled.value || !cms.alert.value?.text) {
            return null;
        }

        return cms.alert.value;
    });

    const showCmsComponents = computed(() => cms.integrationEnabled.value && cms.components.value.length > 0);

    const introPackImage = computed(() => {
        const hero = cms.hero.value;

        if (cms.integrationEnabled.value && hero?.image_src) {
            return {
                src: hero.image_src,
                fallback: statics.packageImage.fallback,
                alt: cms.pickField(hero.image_alt, statics.introImageAlt),
            };
        }

        return {
            src: statics.packageImage.src,
            fallback: statics.packageImage.fallback,
            alt: statics.introImageAlt,
        };
    });

    cms.applyDocumentTitle(statics.documentTitle);

    return {
        ...cms,
        introHeroTitle,
        introHeadingText,
        introBodyText,
        cmsAlertPayload,
        showCmsComponents,
        introPackImage,
    };
}
