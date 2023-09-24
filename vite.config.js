import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image6 from '../assets/55.jpg';

export default defineConfig({
  plugins: [
    react(),
    image6(), // lägg till den här

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