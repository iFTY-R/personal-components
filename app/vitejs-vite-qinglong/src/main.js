import { createApp } from 'vue'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import './style.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import { createPinia } from 'pinia'
import router from './router'

function useTable(app) {
  app.use(VXETable)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(useTable)
app.use(ArcoVue)

app.mount('#app')
