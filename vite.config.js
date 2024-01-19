import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
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
