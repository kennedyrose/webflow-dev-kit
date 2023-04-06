import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: false,
          inlineDynamicImports: false,
          entryFileNames: 'app.js',
        },
      },
    },
  },
});