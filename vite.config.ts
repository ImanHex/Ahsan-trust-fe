import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": "src/components",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@config":"/src/config"
    },
  },
});
