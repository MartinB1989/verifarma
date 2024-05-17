import useFetchInteractor from '~/composables/useFetchInteractor'

const omdbApi = () => {
  const { fetchData } = useFetchInteractor()

  const getFilms = async () => {
    const res = await fetchData('/?apikey=f4c66a1b&page=1', 'GET')
    return res
  }

  return { getFilms }
}

export default omdbApi
