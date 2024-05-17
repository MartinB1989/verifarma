import { defineStore } from 'pinia'
type SnacbarVariant =
  | 'text'
  | 'elevated'
  | 'flat'
  | 'tonal'
  | 'outlined'
  | 'plain'
  | undefined

export const useSnackbar = defineStore('snackbar', {
  state: () => ({
    isOpen: false,
    text: '',
    color: 'success',
    variant: 'elevated',
  }),
  actions: {
    showSnackbar(color: string, text?: string, variant?: SnacbarVariant) {
      this.isOpen = true
      this.color = color
      this.text = text || ''
      this.variant = variant || 'elevated'

      setTimeout(() => {
        this.isOpen = false
      }, 5000)
    },
  },
})
