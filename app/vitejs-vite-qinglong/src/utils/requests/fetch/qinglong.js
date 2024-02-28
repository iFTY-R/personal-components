import { createFetch } from '@vueuse/core'
import { useQinglongStore } from '@/stores/qinglong.js'

const qinglongStore = useQinglongStore()

const useQinglongFetch = createFetch({
  baseUrl: 'http://116.196.94.1:5700',
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
