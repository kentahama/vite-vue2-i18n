import Vue from "vue";
import App from "@/App.vue";
import { castToVueI18n, createI18n } from "vue-i18n-bridge";
import VueI18n from "vue-i18n";

Vue.use(VueI18n, { bridge: true });
const i18n = castToVueI18n(
  createI18n(
    {
      locale: "ja",
      fallbackLocale: "en",
      silentTranslationWarn: true,
      legacy: true,
      allowComposition: true,
    },
    VueI18n
  )
);
Vue.use(i18n);

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
