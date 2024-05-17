import { defineStore } from 'pinia'

export const useAppThemeStore = defineStore('appTheme', {
  state: () => ({
    theme: 'dark',
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
