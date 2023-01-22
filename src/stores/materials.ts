import type Material from '@/interfaces/responses/material'

import { defineStore } from 'pinia'

import materialsJson from '@/constants/materials.json'

export const useMaterialStore = defineStore({
  id: 'materials',

  state: () => {
    return {
      materials: [] as Material[],
      isLoaded: false as boolean
    }
  },

  actions: {
    getMaterials () {
      this.isLoaded = false

      setTimeout(() => {
        this.materials = materialsJson as Material[]
        this.isLoaded = true
      }, 1000)
    }
  },

  getters: {
    isMaterialsIncludesElements: (state): boolean => !!state.materials.length
  }
})