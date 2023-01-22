<template>
  <button :class="['btn btn--icon btn--badge btn--lg']" @click="openSidebar">
    <ShoppingCartIcon />
    <span v-if="shppingCartStore.products?.length" :class="['badge']">
      {{ shppingCartStore.products.length }}
    </span>
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
import { useShoppingCartStore } from '@/stores/shopping-cart'

const sidebarStore = useSidebarStore()
const shppingCartStore = useShoppingCartStore()

function openSidebar () {
  sidebarStore.openSidebar()
}
</script>
