import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import postcssPxToViewport from 'postcss-px-to-viewport'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs'
  },
  base: './',
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
          exclude: [/node_modules\/vant/i]
        })
      ]
    }
  }
})
