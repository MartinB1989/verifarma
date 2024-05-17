<template>
  <div v-if="loading">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
    </v-container>
  </div>
  <div v-else-if="movie">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div>
            <v-img :src="movie.Poster" :alt="movie.Title" height="500"></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>{{ movie.Title }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <p>{{ movie.Plot }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <p><strong>Año:</strong> {{ movie.Year }}</p>
                  <p><strong>Calificación:</strong> {{ movie.Rated }}</p>
                  <p><strong>Género:</strong> {{ movie.Genre }}</p>
                  <p><strong>Director:</strong> {{ movie.Director }}</p>
                  <p><strong>Escritor:</strong> {{ movie.Writer }}</p>
                </v-col>
                <v-col cols="6">
                  <p><strong>Actores:</strong> {{ movie.Actors }}</p>
                  <p><strong>Idioma:</strong> {{ movie.Language }}</p>
                  <p><strong>País:</strong> {{ movie.Country }}</p>
                  <p><strong>Premios:</strong> {{ movie.Awards }}</p>
                  <p>
                    <strong>Calificación IMDb:</strong> {{ movie.imdbRating }}
                  </p>
                  <p><strong>Votos IMDb:</strong> {{ movie.imdbVotes }}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import omdbApi from '../services/omdbApi'

const route = useRoute()
const movieId = route.params.movie_id
const movie = ref()
const loading = ref(false)

onBeforeMount(async () => {
  loading.value = true
  const data = await omdbApi().getMovieDetail(movieId)
  movie.value = data
  loading.value = false
})
</script>
