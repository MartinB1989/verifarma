import { ref } from 'vue'
// import { useUserSessionStore } from '~/stores/userSession'

export default function useFetchInteractor() {
  const loading = ref(false)
  const runtimeConfig = useRuntimeConfig()
  // const userSessionStore = useUserSessionStore()
  // const accessToken = userSessionStore.token
  const accessToken = ''

  async function fetchData(
    url: string,
    method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE',
    body?: any
  ) {
    loading.value = true
    let data = null
    let error = false
    try {
      const headers: HeadersInit = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
      if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
      }
      const response = await $fetch(`${runtimeConfig.public.apiUrl}${url}`, {
        method,
        headers,
        body,
      })
      data = response
    } catch (err: any) {
      console.log('ERROR:', err)
      error = true
      if (err.response) {
        data = err.response._data
      }
    } finally {
      loading.value = false
    }

    return { data, error }
  }

  return {
    loading,
    fetchData,
  }
}
