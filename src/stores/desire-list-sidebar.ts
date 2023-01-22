import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'desireListSidebar',

  state: () => ({
    isOpen: false
  }),

  actions: {
    toggleSidebar () {
      this.isOpen = !this.isOpen
    },
    openSidebar () {
      this.isOpen = true
    },
    closeSidebar () {
      this.isOpen = false
    },
  }
})