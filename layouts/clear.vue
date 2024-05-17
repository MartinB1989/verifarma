<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <template #append>
          <v-btn :icon="themeIcon" @click="toggleTheme"></v-btn>
        </template>
      </v-app-bar>
      <v-main class="default__main">
        <div class="pa-8">
          <slot></slot>
        </div>
      </v-main>
    </v-layout>
    <v-snackbar
      v-model="snackbarStore.isOpen"
      :color="snackbarStore.color"
      max-width="400px"
      location="top right"
    >
      {{ snackbarStore.text }}
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import { useSnackbar } from '../stores/snackbar'
import { useAppThemeStore } from '../stores/appTheme'
import { useTheme } from 'vuetify'

const snackbarStore = useSnackbar()
const appTheme = useAppThemeStore()
const theme = useTheme()

theme.global.name.value = appTheme.getThemeValue

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  appTheme.setTheme(theme.global.name.value)
}

const themeIcon = computed(() => {
  const themeValue = appTheme.getThemeValue
  if (themeValue === 'light') {
    return 'mdi-white-balance-sunny'
  }
  return 'mdi-weather-night'
})
</script>

<style scoped>
.default__main {
  min-height: 100vh;
}
</style>
