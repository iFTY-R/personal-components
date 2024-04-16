import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'
import { useQinglongStore } from '@/stores/qinglong.js'
import { login } from '@/api/qinglong.js'
import { QING_LONG_BASE_URL } from '@/config/qinglong.js'

const qinglongStore = useQinglongStore()

const alovaInstance = createAlova({
  baseURL: qinglongStore.config.baseUrl || QING_LONG_BASE_URL,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest: async (method) => {
    // 假设我们需要添加token到请求头
    if (!method.url.includes('/open/auth/token') && !qinglongStore.token) {
      await login()
    }
    method.config.headers.Authorization = `${qinglongStore.token}`
    // console.log(method);
  },
  responded: {
    // eslint-disable-next-line no-unused-vars
    onSuccess: async (response, method) => {
      return response.json()
    }
  },
  // 设置为null即可全局关闭全部请求缓存
  localCache: null
  // ...
})

export default alovaInstance
