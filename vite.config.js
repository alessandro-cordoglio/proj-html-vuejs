import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<proj-html-vuejs>/',
  plugins: [vue()],
  base: "/proj-html-vuejs/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/variables.scss";',
      },
    },
  },
});
