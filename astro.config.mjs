import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://annthaisolutionmassage.com/",
  integrations: [
    icon(),
    i18n({
      defaultLocale: "it",
      locales: ["it", "en"],
      client: {
        data: true,
        paths: true,
      },
      // Prefix only the non-default locale (English)
      routing: {
        prefixDefaultLocale: false, // Italian won't have /it/ prefix
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-GB', // or en-US
        },
      },
    }),
  ],
});