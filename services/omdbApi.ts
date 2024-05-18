import useFetchInteractor from '~/composables/useFetchInteractor'

const omdbApi = () => {
  const { fetchData } = useFetchInteractor()

  const getMovies = async (searchBy?: string, page?: number) => {
    const res = await fetchData(
      `/?apikey=f4c66a1b&s=${searchBy}&page=${page}`,
      'GET'
    )
    return res
  }
  const getMovieDetail = async (movieId: string) => {
    const res = await fetchData(
      `/?apikey=f4c66a1b&i=${movieId}&plot=full`,
      'GET'
    )
    return res
  }

  return { getMovies, getMovieDetail }
}

export default omdbApi
