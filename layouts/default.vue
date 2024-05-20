<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" density="compact" class="default-app-bar">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>User Name</v-app-bar-title>

        <template #append>
          <v-btn :icon="themeIcon" @click="toggleTheme"></v-btn>
        </template>
      </v-app-bar>
      <client-only>
        <v-navigation-drawer v-model="drawer" temporary class="default-nav">
          <AppMenu />
          <template #append>
            <div class="pa-2">
              <v-btn block color="primary" @click="() => logout()">
                Log out
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </client-only>

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
import { useSnackbar } from '~/stores/snackbar'
import { useAppThemeStore } from '~/stores/appTheme'
import { useUserSessionStore } from '~/stores/userSession'
import { useTheme } from 'vuetify'

const appTheme = useAppThemeStore()
const theme = useTheme()
const drawer = ref(false)
const router = useRouter()
const userSession = useUserSessionStore()

theme.global.name.value = appTheme.getThemeValue

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  appTheme.setTheme(theme.global.name.value)
}

function logout() {
  userSession.$state.token = ''
  router.push('login')
}

const themeIcon = computed(() => {
  const themeValue = appTheme.getThemeValue
  if (themeValue === 'light') {
    return 'mdi-white-balance-sunny'
  }
  return 'mdi-weather-night'
})
const snackbarStore = useSnackbar()
</script>

<style scoped>
.default__main {
  min-height: 100vh;
}
.default-nav,
.default-app-bar {
  position: fixed !important;
}
.default-nav {
  height: calc(100vh - 48px) !important;
}
</style>
