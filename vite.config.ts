import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: resolve("src/shared/components"),
      },
      {
        find: "@config",
        replacement: resolve("src/shared/config"),
      },
      {
        find: "@dto",
        replacement: resolve("src/shared/dto"),
      },
      {
        find: "@layouts",
        replacement: resolve("src/shared/layouts"),
      },
      {
        find: "@lib",
        replacement: resolve("src/shared/lib"),
      },
      {
        find: "@styles",
        replacement: resolve("src/shared/styles"),
      },
      {
        find: "@commonTypes",
        replacement: resolve("src/shared/types"),
      },
      {
        find: "@modules",
        replacement: resolve("src/modules"),
      },
      {
        find: "@routes",
        replacement: resolve("src/routes"),
      },
      {
        find: "@",
        replacement: resolve("src"),
      },
    ],
  },
});
