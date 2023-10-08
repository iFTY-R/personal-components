import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  return {
    plugins: [vue(), vueJsx(), UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {}
        }
      }
    },
    // vite 相关配置
    server: {
      // port: 9999,
      // host: true,
      // open: true,
      // proxy: {
      //   // https://cn.vitejs.dev/config/#server-proxy
      //   '/dev-api': {
      //     target: 'http://192.168.0.110:8081',
      //     changeOrigin: true,
      //     rewrite: (p) => p.replace(/^\/dev-api/, '')
      //   }
      // }
    }
  }
})
