<template>
  <v-container>
    <v-row>
      <v-col class="mb-8">
        <v-text-field
          v-model="searchKey"
          :loading="loading"
          append-inner-icon="mdi-magnify"
          label="Search a movie"
          variant="solo"
          hide-details
          single-line
          @keyup.enter="searchMovies"
          @click:append-inner="searchMovies"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="3"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import omdbApi from '../services/omdbApi'
import MovieCard from '../components/app/MovieCard.vue'

const snackbar = useSnackbar()
const loading = ref(false)
const searchKey = ref('')
const movies = ref<any>([])
const route = useRoute()
const router = useRouter()

interface ApiResponse {
  Response?: string
  Search?: []
  Error?: string
}

const searchMovies = async () => {
  loading.value = true
  const data: ApiResponse = await omdbApi().getMovies(searchKey.value)
  if (data.Response === 'True') {
    movies.value = data.Search
    router.push({ query: { search: searchKey.value } })
  } else {
    snackbar.showSnackbar('error', data.Error)
    console.error(data.Error)
  }
  loading.value = false
}

const fetchMoviesFromURL = async () => {
  const searchQuery = route.query.search as string | undefined
  if (searchQuery) {
    searchKey.value = searchQuery
    await searchMovies()
  }
}

onBeforeMount(fetchMoviesFromURL)
</script>
