import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, '../packages/components/src'),
      '@icons': resolve(__dirname, '../packages/icons/src'),
    },
  },
});
