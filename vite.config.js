import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {URL, fileURLToPath} from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [vue()],
})
