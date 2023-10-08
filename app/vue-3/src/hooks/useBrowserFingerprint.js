import { onMounted, ref } from 'vue'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export default function useBrowserFingerprint() {
  // 创建一个 ref 来存储浏览器指纹信息
  const fingerprint = ref(null)

  // 在组件挂载时获取浏览器指纹
  onMounted(async () => {
    const fpPromise = FingerprintJS.load()
    const fp = await fpPromise
    const result = await fp.get()
    fingerprint.value = result.visitorId
  })

  // 返回浏览器指纹 ref
  return fingerprint
}
