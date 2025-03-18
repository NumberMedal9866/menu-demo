import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Add this line
  css: {
    devSourcemap: true
  },
  build:{
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      include: ['src/assets/img/**/*.{png,jpg,jpeg,webp}'],  // ✅ Ensures optimization includes all images
      cache: true,   // ✅ Prevents unnecessary reprocessing
      logStats: true // ✅ Debugging logs to verify optimization
    }),
    viteCompression({ 
      algorithm: 'gzip', // ✅ Enable Gzip compression
      threshold: 1024, // Compress files larger than 1KB
      ext: '.gz', // Append `.gz` to compressed files
      deleteOriginFile: false, // Keep original files
    }),
  ],
});
