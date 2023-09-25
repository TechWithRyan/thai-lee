import image6 from '@rollup/plugin-image'; // Lägg till den här
import React from 'react';
import { defineConfig } from 'rollup';

export default defineConfig({
  plugins: [
    React,
    image6(), // lägg till den här
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