import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        // Put all JS in single file
        output: {
          manualChunks: () => 'main.js',

          // Disable chunking
          chunkFileNames: () => 'main.js',
        },
      },
    },
  },
});