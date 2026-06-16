import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://mmarq.github.io";
const base = process.env.BASE_PATH ?? "/St.-Charles-Campus-Ministry-Site";

export default defineConfig({
  site,
  base,
  output: "static"
});
