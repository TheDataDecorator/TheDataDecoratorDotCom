import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://thedatadecorator.com",
  integrations: [tailwind(), mdx(), sitemap()],
  vite: {
    build: {
      minify: "esbuild"
    },
    esbuild: {
      drop: ["console", "debugger"]
    }
  },
  compressHTML: true
});