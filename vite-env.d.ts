/// <reference types="vite/client" />


// Lisätään .env tiedoston muuttujien tyypit

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_KEY: string;
    // Lisää muita ympäristömuuttujia tarvittaessa
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}