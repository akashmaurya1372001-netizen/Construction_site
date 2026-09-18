import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path  from 'path'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src"),
    }
  }
})



/*import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    
  };
});*/
