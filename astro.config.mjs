import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://annthaisolutionmassage.com/", // update with your Italian domain
  integrations: [
    icon(),
    i18n({
      defaultLocale: "it",
      locales: ["it", "en"],
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
        "/about": {
          en: "/about",
          // it: "/chi-siamo", // optional: use Italian slug
        },
        "/massages": {
          en: "/massages",
          // it: "/massaggi", // optional: use Italian slug
        }
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-US',
        },
      },
    }),
  ],
});