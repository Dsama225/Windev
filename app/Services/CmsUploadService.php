<?php

namespace App\Services;

use App\Models\SitePage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use RuntimeException;

class CmsUploadService
{
    /**
     * @return array{url: string, path: string, filename: string, mime: string, size: int, kind: string}
     */
    public function store(SitePage $page, UploadedFile $file, string $kind): array
    {
        $kind = $kind === 'document' ? 'document' : 'image';
        $folder = $kind === 'document' ? 'documents' : 'images';
        $slug = str_replace('.', '-', $page->route_name);
        $relativeDir = "uploads/cms/{$slug}/{$folder}";
        $absoluteDir = public_path($relativeDir);

        if (! is_dir($absoluteDir) && ! mkdir($absoluteDir, 0755, true) && ! is_dir($absoluteDir)) {
            throw new RuntimeException('Impossible de créer le dossier de destination.');
        }

        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $extension = strtolower($file->getClientOriginalExtension() ?: $file->extension());
        $safeBase = Str::slug($originalName) ?: 'asset';
        $filename = "{$safeBase}-".Str::lower(Str::random(6)).".{$extension}";
        $mime = (string) $file->getClientMimeType();
        $size = (int) $file->getSize();

        $file->move($absoluteDir, $filename);

        $path = "/{$relativeDir}/{$filename}";

        return [
            'url' => $path,
            'path' => $path,
            'filename' => $filename,
            'mime' => $mime,
            'size' => $size,
            'kind' => $kind,
        ];
    }

    public function deletePublicPath(string $publicPath): bool
    {
        $normalized = '/'.ltrim($publicPath, '/');

        if (! str_starts_with($normalized, '/uploads/cms/')) {
            return false;
        }

        $absolute = public_path(ltrim($normalized, '/'));

        if (! is_file($absolute)) {
            return false;
        }

        return unlink($absolute);
    }
}
