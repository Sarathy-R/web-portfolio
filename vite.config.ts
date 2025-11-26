import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' allows assets to be loaded relative to the index.html
  // This is crucial for GitHub Pages where the app is often hosted in a subdirectory
  base: './',
});