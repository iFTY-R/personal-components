import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import {
  QING_LONG_BASE_URL,
  QING_LONG_CLIENT_MEI_TUAN,
  QING_LONG_TASK_MEI_TUAN_ID
} from '@/config/qinglong.js'

export const useQinglongStore = defineStore('qinglong', () => {
  const token = ref('')
  const setToken = (val) => {
    token.value = val
  }

  const config = useLocalStorage('qinglong-config-meituan', {
    baseUrl: QING_LONG_BASE_URL || '',
    clientId: QING_LONG_CLIENT_MEI_TUAN.clientId || '',
    clientSecret: QING_LONG_CLIENT_MEI_TUAN.clientSecret || '',
    taskMeiTuanId: QING_LONG_TASK_MEI_TUAN_ID || ''
  })

  const setConfig = (val) => {
    if (Reflect.has(val, 'baseUrl')) {
      config.baseUrl = val.baseUrl
    }
    if (Reflect.has(val, 'clientId')) {
      config.clientId = val.clientId
    }
    if (Reflect.has(val, 'clientSecret')) {
      config.clientSecret = val.clientSecret
    }
  }

  return {
    token,
    setToken,
    config,
    setConfig
  }
})
