import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),


  ],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[image6].[ext]',
      },
    },
  },

  assetsInclude: /\.(png|jpg|jpeg|gif|svg)$/,
});