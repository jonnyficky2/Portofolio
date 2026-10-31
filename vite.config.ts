import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages repository subpath: https://jonnyficky2.github.io/Portofolio/
  base: '/Portofolio/',
  server: {
    port: 3000,
    open: false,
  },
});

