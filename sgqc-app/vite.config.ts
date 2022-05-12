import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve:{
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react()],
  build: {
    assetsDir: 'static',
    brotliSize: false, // not supported in StackBlitz
  },
});
