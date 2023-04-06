import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: `server`,
  server: {
    port: 8080
  },
  adapter: vercel(),
});