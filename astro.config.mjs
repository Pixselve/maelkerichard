import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mael.app",
  integrations: [sitemap(), mdx(), robotsTxt()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
