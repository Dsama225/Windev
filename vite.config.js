import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const spaIndexPath = path.join(projectRoot, 'index.html');

function isViteAssetPath(urlPath) {
    return (
        urlPath.startsWith('/@') ||
        urlPath.startsWith('/resources/') ||
        urlPath.startsWith('/node_modules/') ||
        urlPath.startsWith('/build/') ||
        /\.[a-zA-Z0-9]+$/.test(urlPath)
    );
}

/** Dev only: serve index.html for client routes (évite la page blanche sur le port Vite). */
function spaDevFallback() {
    return {
        name: 'spa-dev-fallback',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const urlPath = req.url?.split('?')[0] ?? '';

                if (req.method !== 'GET' || isViteAssetPath(urlPath)) {
                    return next();
                }

                if (!fs.existsSync(spaIndexPath)) {
                    return next();
                }

                fs.readFile(spaIndexPath, 'utf8', (error, html) => {
                    if (error) {
                        return next(error);
                    }

                    server
                        .transformIndexHtml(urlPath, html)
                        .then((transformed) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/html');
                            res.end(transformed);
                        })
                        .catch(next);
                });
            });
        },
    };
}

export default defineConfig({
    plugins: [
        spaDevFallback(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/admin.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue(),
    ],
    server: {
        host: '127.0.0.1',
        port: 4173,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
