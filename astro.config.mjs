import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mael.app",
  integrations: [sitemap(), tailwind(), prefetch(), mdx()]
});
