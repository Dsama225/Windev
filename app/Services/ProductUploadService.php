<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use RuntimeException;

class ProductUploadService
{
    /**
     * @return array{path: string, filename: string, mime: string, size: int}
     */
    public function store(Product $product, UploadedFile $file): array
    {
        $relativeDir = "uploads/products/{$product->id}";
        $absoluteDir = public_path($relativeDir);

        if (! is_dir($absoluteDir) && ! mkdir($absoluteDir, 0755, true) && ! is_dir($absoluteDir)) {
            throw new RuntimeException('Impossible de créer le dossier de destination.');
        }

        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $extension = strtolower($file->getClientOriginalExtension() ?: $file->extension());
        $safeBase = Str::slug($originalName) ?: 'image';
        $filename = "{$safeBase}-".Str::lower(Str::random(6)).".{$extension}";
        $mime = (string) $file->getClientMimeType();
        $size = (int) $file->getSize();

        $file->move($absoluteDir, $filename);

        $path = "/{$relativeDir}/{$filename}";

        return [
            'path' => $path,
            'filename' => $filename,
            'mime' => $mime,
            'size' => $size,
        ];
    }

    public function deletePublicPath(string $publicPath): bool
    {
        $normalized = '/'.ltrim($publicPath, '/');

        if (! str_starts_with($normalized, '/uploads/products/')) {
            return false;
        }

        $absolute = public_path(ltrim($normalized, '/'));

        if (! is_file($absolute)) {
            return false;
        }

        return unlink($absolute);
    }
}
