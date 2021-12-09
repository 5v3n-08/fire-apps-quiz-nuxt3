import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  buildModules: [
    // https://windicss.org/integrations/nuxt.html
    "nuxt-windicss",
    // https://pinia.esm.dev/
    "@pinia/nuxt",
  ],
  vue: {
    config: {
      devtools: true,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
});
