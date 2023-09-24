import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import banner from '../assets/55.jpg';

export default defineConfig({
  plugins: [
    react(),
    image(), // lägg till den här

  ],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },

  assetsInclude: /\.(png|jpg|jpeg|gif|svg)$/,
});