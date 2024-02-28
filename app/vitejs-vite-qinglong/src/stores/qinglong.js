import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQinglongStore = defineStore('qinglong', () => {
  const token = ref('')
  const setToken = (val) => {
    token.value = val
  }

  return { token, setToken }
})
