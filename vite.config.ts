import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/01-ts-basics/", // укажи путь, если деплоишь в подкаталог GitHub Pages
  build: {
    sourcemap: true, // опционально: помогает отлаживать код на GitHub Pages
  },
});
