// test/MovieCard.spec.ts
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import MovieCard from '@/components/app/MovieCard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const mockMovie = {
  Title: 'Inception',
  Year: '2010',
  imdbID: 'tt0139662',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYWEwMjYyMTYtMGNlNS00M2M2LWJmYzctYTJjYjgwZjYzYjNjXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg',
}

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

describe('MovieCard.vue', () => {
  test('renders movie details correctly', () => {
    const wrapper = mount(MovieCard, {
      global: {
        plugins: [vuetify, router],
      },
      props: {
        movie: mockMovie,
      },
    })
    expect(wrapper.text()).toContain('Inception')
    expect(wrapper.text()).toContain('2010')
    expect(wrapper.text()).toContain('tt0139662')
    expect(wrapper.text()).toContain('movie')
  })
})
