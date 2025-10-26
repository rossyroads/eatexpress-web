/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_KEYCLOAK_URL: string;
  readonly VITE_KEYCLOAK_CLIENT_ID: string;
  readonly VITE_KEYCLOAK_REALM: string;
  readonly VITE_BACKEND_HOST: string;
  readonly VITE_BACKEND_API_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
