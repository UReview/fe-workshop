import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This is the alias for the src/ directory
      // This allows us to import modules from the src/ directory without
      // having to use relative paths
      "@": "/src",
    },
  },
});
