import { useUserSessionStore } from '~/stores/userSession'

export default defineNuxtRouteMiddleware(async (to) => {
  const userSessionStore = useUserSessionStore()

  if (userSessionStore.isAuthenticated() && to.name === 'login') {
    return navigateTo(`/`)
  }

  if (!userSessionStore.isAuthenticated() && to.name === 'login') {
    return
  }

  if (userSessionStore.isAuthenticated()) {
    return
  }

  return navigateTo(`/login`)
})
