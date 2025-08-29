import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    hmr: true,
    cors: true,
    proxy: {
      "/api": {
        target: "http://192.168.0.104:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  preview: {},
  css: {},
  resolve: {
    alias: {},
  },
});
