import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Deploying to abdulllahhh.github.io (user/org site) => served from root, no base path needed.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "docs",
  },
});
