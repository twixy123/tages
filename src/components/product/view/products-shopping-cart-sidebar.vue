<template>
  <SidebarWrapper :is-open="sidebarStore.isOpen" @close="sidebarStore.closeSidebar">
    <h4 :class="['m-b-16']">
      Shopping cart
    </h4>
    <div v-if="!shoppingCartStore.isCartEmty">
      <ProductCard
        v-for="product in shoppingCartStore.products"
        :key="product.id"
        :product="product"
        @remove="onRemove"
      />
    </div>
    <p v-else>
      No data to display
    </p>
  </SidebarWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductsShoppingCartSidebar',
})
</script>

<script setup lang="ts">
import SidebarWrapper from '@/components/bars/sidebar-wrapper.vue'
import ProductCard from '@/components/product/view/product-card-shopping-cart.vue'

import type Product from '@/interfaces/responses/product-rack-systems'

import { useSidebarStore } from '@/stores/shopping-cart-sidebar'
import { useShoppingCartStore } from '@/stores/shopping-cart'

const sidebarStore = useSidebarStore()
const shoppingCartStore = useShoppingCartStore()

function onRemove (product: Product) {
  shoppingCartStore.changeShoppingCartProductsState(product)
}
</script>
