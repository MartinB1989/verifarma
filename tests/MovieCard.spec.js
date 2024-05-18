import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/movie/:id',
    name: 'Movie',
    component: { template: '<div>Movie Page</div>' },
  },
]

describe('MovieCard.vue', () => {
  const movie = {
    Poster: 'https://via.placeholder.com/150',
    Title: 'Test Movie',
    Type: 'Movie',
    Year: '2021',
    imdbID: 'tt1234567',
  }

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  const wrapper = mount(MovieCard, {
    global: {
      plugins: [router],
    },
    props: {
      movie: movie,
    },
  })

  test('renders correctly', () => {
    expect(wrapper.find('.movie-card__img').attributes('src')).toBe(
      movie.Poster
    )
    expect(wrapper.find('v-card-title').text()).toBe(movie.Title)
    expect(wrapper.find('v-card-subtitle').text()).toContain(
      `${movie.Type} | ${movie.Year}`
    )
    expect(wrapper.find('v-card-text').text()).toContain(
      `IMDb ID: ${movie.imdbID}`
    )
  })

  test('navigates to movie page on click', async () => {
    router.push = jest.fn()
    await wrapper.find('v-card').trigger('click')
    expect(router.push).toHaveBeenCalledWith(`/movie/${movie.imdbID}`)
  })
})
