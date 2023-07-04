import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Timeline from "primevue/timeline";
import Dialog from "primevue/dialog";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Menubar", Menubar);
    nuxtApp.vueApp.component("Timeline", Timeline);
    nuxtApp.vueApp.component("Dialog", Dialog);
});
