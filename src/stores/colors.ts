import { defineStore } from 'pinia'

import Colors from '@/assets/style/theme/colors/colors.module.scss'

export const useColorsStore = defineStore({
  id: 'colors',
  state: () => ({
    colors: Colors
  })
})