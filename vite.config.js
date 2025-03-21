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
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      logStats: true, // ✅ Show optimization logs
      includePublic: true, // ✅ Optimize images in `public/` folder too
      cache: false, // ✅ Prevent caching issues
      force: true, // ✅ Force compression even if file sizes are similar

      png: { quality: 50 }, 
      jpeg: { quality: 50 },
      jpg: { quality: 50 },

      webp: { lossless: false, quality: 30 }, // ✅ Convert all images to WebP
      avif: { lossless: false, quality: 30 }, // ✅ Convert all images to AVIF

      svg: {
        multipass: true,
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } }
        ]
      }
    }),
    viteCompression({ 
      algorithm: 'gzip', // ✅ Enable Gzip compression
      threshold: 1024, // Compress files larger than 1KB
      ext: '.gz', // Append `.gz` to compressed files
      deleteOriginFile: false, // Keep original files
    }),
  ],
});
