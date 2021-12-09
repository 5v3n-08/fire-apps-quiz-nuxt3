import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import { VApp, VMain, VBtn } from "vuetify/components";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VApp,
      VMain,
      VBtn,
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
//
