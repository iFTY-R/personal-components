import { createFetch } from '@vueuse/core'
import { useQinglongStore } from '@/stores/qinglong.js'
import { QING_LONG_BASE_URL } from '@/config/qinglong.js'

const qinglongStore = useQinglongStore()

const useQinglongFetch = createFetch({
  baseUrl: QING_LONG_BASE_URL,
  combination: 'overwrite',
  options: {
    // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
    async beforeFetch({ options }) {
      // `${ data.token_type } ${ data.token }`
      options.headers.Authorization = `${qinglongStore.token}`

      return { options }
    }
  }
})
export default useQinglongFetch
