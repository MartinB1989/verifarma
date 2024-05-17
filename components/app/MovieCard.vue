<template>
  <v-card
    class="mx-auto cursor-pointer"
    max-width="300"
    @click="() => onClickCard(movie.imdbID)"
  >
    <div class="movie-card__img-container">
      <img :src="movie.Poster" class="movie-card__img" />
    </div>
    <v-card-title>{{ movie.Title }}</v-card-title>
    <v-card-subtitle>
      <span class="text-grey">{{ movie.Type }} | {{ movie.Year }}</span>
    </v-card-subtitle>
    <v-card-text>
      <div>IMDb ID: {{ movie.imdbID }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const router = useRouter()
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const onClickCard = (id: string) => {
  router.push(`/movie/${id}`)
  console.log(`Se hizo clic en la película ${props.movie.Title}`)
}
</script>

<style scoped>
.movie-card__img-container {
  width: 100%;
  height: 360px;
}
.movie-card__img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
