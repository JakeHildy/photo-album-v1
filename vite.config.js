import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aiImages: resolve(__dirname, "ai-images.html"),
      },
    },
  },
});
