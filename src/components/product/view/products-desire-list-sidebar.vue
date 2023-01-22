<template>
  <SidebarWrapper :is-open="sidebarStore.isOpen" @close="sidebarStore.closeSidebar">
    <h4 :class="['m-b-16']">
      Desire list
    </h4>
    <div v-if="!desireListStore.isDesireListEmty">
      <ProductCard
        v-for="product in desireListStore.products"
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
  name: 'ProductsDesireListSidebar',
})
</script>

<script setup lang="ts">
import SidebarWrapper from '@/components/bars/sidebar-wrapper.vue'
import ProductCard from '@/components/product/view/product-card-shopping-cart.vue'

import type Product from '@/interfaces/responses/product-rack-systems'

import { useSidebarStore } from '@/stores/desire-list-sidebar'
import { useDesireListStore } from '@/stores/desire-list'

const sidebarStore = useSidebarStore()
const desireListStore = useDesireListStore()

function onRemove (product: Product) {
  desireListStore.changeDesireListProductsState(product)
}
</script>
