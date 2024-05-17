import { ref } from 'vue'

export default function useFetchInteractor() {
  const loading = ref(false)
  const runtimeConfig = useRuntimeConfig()

  async function fetchData(
    url: string,
    method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE',
    body?: any
  ) {
    loading.value = true
    let response = {}
    const Error = null

    try {
      const headers: HeadersInit = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }

      const res: any = await $fetch(`${runtimeConfig.public.apiUrl}${url}`, {
        method,
        headers,
        body,
      })

      response = res
    } catch (err: any) {
      response = { Response: 'False', Error: 'Error desconocido' }
    } finally {
      loading.value = false
    }

    return response
  }

  return { loading, fetchData }
}
