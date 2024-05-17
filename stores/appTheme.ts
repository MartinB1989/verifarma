import { defineStore } from 'pinia'

export const useAppThemeStore = defineStore('appTheme', {
  state: () => ({
    theme: 'light',
  }),
  actions: {
    setTheme(value: string) {
      this.theme = value
    },
  },
  getters: {
    getThemeValue(state) {
      return state.theme
    },
  },
  persist: true,
})
