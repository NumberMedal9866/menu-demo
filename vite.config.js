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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i, 
      includePublic: true, 
      logStats: true, 
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { lossless: false, quality: 80 },
      avif: { lossless: false, quality: 80 },
      cache: true, // ✅ Enable caching
      cacheLocation: './.vite-image-cache', // ✅ Define cache location
    }),
    viteCompression({ 
      algorithm: 'gzip', // ✅ Enable Gzip compression
      threshold: 1024, // Compress files larger than 1KB
      ext: '.gz', // Append `.gz` to compressed files
      deleteOriginFile: false, // Keep original files
    }),
  ],
});
