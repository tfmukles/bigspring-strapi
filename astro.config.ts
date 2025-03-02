import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import "dotenv/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import type { Config } from "./src/interface";
import { fetchContentType } from "./src/lib/strapi";

// Function-based configuration
export async function getConfig() {
  const { site } = await fetchContentType<Config>(
    "config",
    {
      populate: {
        site: {
          populate: "*",
        },
      },
    },
    true,
  );

  return defineConfig({
    site: site.baseUrl || "http://examplesite.com",
    base: site.basePath || "/",
    trailingSlash: site.trailingSlash ? "always" : "never",
    integrations: [
      react(),
      sitemap(),
      tailwind({
        applyBaseStyles: false,
      }),
      AutoImport({
        imports: [
          "@/shortcodes/Button",
          "@/shortcodes/Accordion",
          "@/shortcodes/Notice",
          "@/shortcodes/Video",
          "@/shortcodes/Youtube",
          "@/shortcodes/Tabs",
          "@/shortcodes/Tab",
        ],
      }),
      mdx(),
    ],
    markdown: {
      remarkPlugins: [
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true,
      },
    },
  });
}

// Export the function invocation
export default getConfig();
