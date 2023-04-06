import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel(),
  vite: {
    build: {
      // Never inline assets to force a JS file to be created
      assetsInlineLimit: 1,
    },
  },
});