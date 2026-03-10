import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://m0nk-tnd.github.io',
  base: '/carbasix-landing',
  integrations: [tailwind()],
});
