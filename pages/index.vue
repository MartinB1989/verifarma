<template>
  <div>Hola mundo</div>
</template>

<script setup lang="ts">
import omdbApi from '../services/omdbApi'

omdbApi().getFilms()
</script>

<style scoped></style>
