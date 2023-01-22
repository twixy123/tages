<template>
  <button :class="['btn btn--icon']" @click="openSidebar">
    <ShoppingCartIcon />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShoppingCartToggleBtn'
})
</script>

<script setup lang="ts">
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg?component'
import { useSidebarStore } from '@/stores/shopping-cart-sidebar'
const sidebarStore = useSidebarStore()

function openSidebar () {
  sidebarStore.openSidebar()
}
</script>
