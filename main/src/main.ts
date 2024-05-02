import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@mono/shared/scrollbar'

import WujieVue from 'wujie-vue3'

const { preloadApp } = WujieVue

const app = createApp(App)

// 注册 Wujie Vue3 组件 使用 app.use(WujieVue) webstorm 编辑器识别不到。
app.component('WujieVue', WujieVue)

preloadApp({ name: 'vue3', url: 'http://localhost:5174/', exec: true })
preloadApp({ name: 'react', url: 'http://localhost:5175/', exec: true })

app.use(createPinia())
app.use(router)

app.mount('#app')
