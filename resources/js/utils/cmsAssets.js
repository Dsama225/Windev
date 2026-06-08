import { adminCmsService } from '../services/adminCmsService';

export function isCmsUploadPath(path) {
    return typeof path === 'string' && path.startsWith('/uploads/cms/');
}

export async function deleteCmsAsset(routeName, path) {
    if (!isCmsUploadPath(path) || !routeName) {
        return false;
    }

    try {
        const result = await adminCmsService.deleteAsset(routeName, path);

        return Boolean(result?.deleted);
    } catch {
        return false;
    }
}

export async function deleteCmsAssets(routeName, paths = []) {
    const unique = [...new Set(paths.filter(isCmsUploadPath))];

    await Promise.all(unique.map((path) => deleteCmsAsset(routeName, path)));
}

export function collectComponentAssetPaths(component) {
    if (!component) {
        return [];
    }

    if (component.type === 'card' && component.image_src) {
        return [component.image_src];
    }

    if (component.type === 'carousel') {
        return (component.slides ?? [])
            .map((slide) => slide.image_src)
            .filter(Boolean);
    }

    return [];
}
