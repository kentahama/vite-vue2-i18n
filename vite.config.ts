import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue(), VueI18nPlugin({ bridge: true })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
