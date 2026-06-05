/**
 * Vérifie la cohérence APP_URL / Vite avant `npm run dev`.
 * Évite les boucles HMR (localhost vs 127.0.0.1, port manquant).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const envPath = path.join(root, '.env');

function readEnv(name) {
    if (!fs.existsSync(envPath)) {
        return null;
    }

    const line = fs
        .readFileSync(envPath, 'utf8')
        .split(/\r?\n/)
        .find((row) => row.startsWith(`${name}=`));

    if (!line) {
        return null;
    }

    return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, '');
}

const appUrl = readEnv('APP_URL');
const viteHost = readEnv('VITE_DEV_HOST') ?? '127.0.0.1';
const vitePort = readEnv('VITE_DEV_PORT') ?? '4173';

const warnings = [];
const errors = [];

if (!appUrl) {
    warnings.push('APP_URL absent dans .env — utilisez http://127.0.0.1:8000');
} else {
    try {
        const url = new URL(appUrl);
        const browserHost = url.hostname;

        if (browserHost === 'localhost' && viteHost === '127.0.0.1') {
            errors.push(
                'APP_URL utilise "localhost" alors que Vite écoute sur 127.0.0.1 — ' +
                    'mettez APP_URL=http://127.0.0.1:8000 (même hôte que le navigateur).',
            );
        }

        if (!url.port && url.protocol === 'http:') {
            warnings.push(
                `APP_URL sans port (${appUrl}) — avec "php artisan serve --port=8000", utilisez :8000 dans APP_URL.`,
            );
        }
    } catch {
        warnings.push(`APP_URL invalide : ${appUrl}`);
    }
}

for (const message of warnings) {
    console.warn(`[check-dev-env] ${message}`);
}

const manifestPath = path.join(root, 'public/build/manifest.json');
if (!fs.existsSync(manifestPath)) {
    errors.push(
        'public/build/manifest.json absent — exécutez npm run build (obligatoire pour /windevadmin en local).',
    );
}

const bootstrapPath = path.join(root, 'bootstrap/app.php');
if (fs.existsSync(bootstrapPath)) {
    const bootstrap = fs.readFileSync(bootstrapPath, 'utf8');
    if (!bootstrap.includes('SuppressViteHotForAdmin')) {
        warnings.push(
            'bootstrap/app.php ne référence pas SuppressViteHotForAdmin — risque de boucle HMR sur l’admin.',
        );
    }
}

if (errors.length > 0) {
    for (const message of errors) {
        console.error(`[check-dev-env] ${message}`);
    }
    process.exit(1);
}

console.log(`[check-dev-env] OK — Vite ${viteHost}:${vitePort}, APP_URL=${appUrl ?? '(défaut)'}, build admin prêt`);
