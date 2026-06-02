<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Supabase — référence projet (non secret)
    |--------------------------------------------------------------------------
    |
    | La base de données est PostgreSQL hébergée sur Supabase.
    | Laravel s'y connecte via la connexion `supabase` (config/database.php).
    | Les secrets (mot de passe) restent dans .env — jamais ici.
    |
    | Dashboard : https://supabase.com/dashboard/project/{project_ref}/settings/database
    */
    'project_ref' => env('SUPABASE_PROJECT_REF'),

    'schema' => env('DB_SCHEMA', 'public'),

    /*
    | Connexion directe (recommandée pour migrations / artisan).
    | Host : db.{project_ref}.supabase.co — port 5432
    |
    | Pooler transaction (optionnel, port 6543) — plutôt pour le runtime HTTP :
    | SUPABASE_POOLER_HOST=aws-0-eu-central-1.pooler.supabase.com
    */
    'pooler_host' => env('SUPABASE_POOLER_HOST'),
    'pooler_port' => env('SUPABASE_POOLER_PORT', '6543'),
];
