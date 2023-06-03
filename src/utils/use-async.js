

import { routerPush } from '../router'
import { isFetchError } from '../services'
import { ref } from 'vue'


export default function useAsync (fn) {
  const active = ref(false)
  const run = async (...args) => {
    active.value = true
    try {
      const result = await fn(...args)
      return result
    } catch (error) {

      if (isFetchError(error) && error.status === 401) {
        await routerPush('login')
        throw new Error('Need to login first')
      }

      throw error
    } finally {
      active.value = false
    }
  }

  return { active, run }
}
