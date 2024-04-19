import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      shortEmits: true,

      shortVmodel: {
        prefix: '$'
      },

      reactivityTransform: true,
      shortBind: true,

      defineProp: {
        edition: 'kevinEdition'
      },

      defineEmit: true,
      setupComponent: true,
      setupSFC: true,
      exportRender: true,
      chainCall: true,
      jsxDirective: true,
      booleanProp: true,

      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/]
        }),

        vueJsx: VueJsx()
      },

      exportExpose: true
    }),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
