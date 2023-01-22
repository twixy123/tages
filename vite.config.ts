import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/tages/',
  plugins: [vue(), svgLoader()],
  server: {
    port: 8080,
    host: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/style/variables.scss";
          @import "./src/assets/style/theme/colors/colors.scss";
          @import "./src/assets/style/mixins/index.scss";
        `,
      },
    },
  },
})
