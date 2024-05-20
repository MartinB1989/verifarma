import { defineStore } from 'pinia'

export const useUserSessionStore = defineStore('userSession', {
  state: () => ({ token: '' }),
  actions: {
    isAuthenticated() {
      return this.token
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
