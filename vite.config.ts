import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  build: {
    outDir: path.join(__dirname, "build"),
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [react()],
});
