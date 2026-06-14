const STATIC_SLUG_BY_ID = {
    windev: 'windev',
    webdev: 'webdev',
    mobile: 'windev-mobile',
};

export function staticFallbackForSlug(slug, staticProducts = []) {
    const entry = Object.entries(STATIC_SLUG_BY_ID).find(([, value]) => value === slug);

    if (!entry) {
        return null;
    }

    return staticProducts.find((product) => product.id === entry[0]) ?? null;
}

export function resolveProductDisplayImages(catalogProduct) {
    const images = catalogProduct.images ?? [];
    const primary = catalogProduct.primary_image
        ?? images.find((image) => image.is_primary)
        ?? images[0]
        ?? null;
    const secondary = images.find((image) => !image.is_primary) ?? null;
    const logo = secondary && secondary.id !== primary?.id ? secondary : null;

    return { logo, package: primary };
}

export function mapProductToHomeCard(catalogProduct, staticFallback = null) {
    const { logo: logoImage, package: packageImage } = resolveProductDisplayImages(catalogProduct);

    return {
        id: catalogProduct.slug,
        title: catalogProduct.name,
        icons: catalogProduct.tagline ?? '',
        description: catalogProduct.description ?? '',
        imageAlt: packageImage?.alt ?? catalogProduct.name,
        logo: {
            src: logoImage?.path ?? staticFallback?.logo?.src ?? '',
            fallback: staticFallback?.logo?.fallback,
        },
        package: {
            src: packageImage?.path ?? staticFallback?.package?.src ?? '',
            fallback: staticFallback?.package?.fallback,
        },
        linkPath: catalogProduct.link_path || null,
    };
}

export function resolveHomeProducts(catalogProducts, staticProducts) {
    if (!catalogProducts?.length) {
        return staticProducts;
    }

    return catalogProducts.map((product) =>
        mapProductToHomeCard(product, staticFallbackForSlug(product.slug, staticProducts)),
    );
}

export function productDetailPath(product) {
    return `/boutique/${product.slug}`;
}

export function formatProductPrice(price) {
    const value = Number(price);

    if (!Number.isFinite(value) || value <= 0) {
        return 'Sur devis';
    }

    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(value);
}
