import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          variables: {},
          colors: {
            primary: "#D01117",
            secondary: "#2A2B2E",
            success: "#6E9075",
            warning: "#ffb400",
            info: "#000",
            error: "#ff242b",
            background: "#fff",
            surface: "#f5f5f5",
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
//
