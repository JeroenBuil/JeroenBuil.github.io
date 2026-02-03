import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"), //allows the use of a @ alias for imports e.g. @components/ThemeToggle instead of ../components/ThemeToggle
    }, 
  },
})
