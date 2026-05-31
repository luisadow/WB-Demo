import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://luisadow.github.io/WB-Demo",
  base: "/WB-Demo/",
  integrations: [tailwind()]
});
