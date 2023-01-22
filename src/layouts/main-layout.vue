<template>
  <div :class="[$style['block']]">
    <ProductShoppingCartSidebar />
    <ProductDesireListSidebar />
    <div :class="[$style['header']]">
      <Breadcrumbs />
      <div :class="[$style['actions']]">
        <ShoppingCartToggleBtn />
        <DesireListToggleBtn />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>

<script setup lang="ts">
import Breadcrumbs from '@/components/breadcrumbs/index.vue'
import ShoppingCartToggleBtn from '@/components/bars/extensions/view/shopping-cart-toggle-btn.vue'
import DesireListToggleBtn from '@/components/bars/extensions/view/desire-list-toggle-btn.vue'
import ProductShoppingCartSidebar from '@/components/product/view/products-shopping-cart-sidebar.vue'
import ProductDesireListSidebar from '@/components/product/view/products-desire-list-sidebar.vue'

import { RouterView } from 'vue-router'
import { useCssModule } from 'vue'

const $style = useCssModule()
</script>

<style lang="scss" module>
.block {
  background: map-get($shades, 'white');
  height: 100%;
  min-height: 100vh;

  @include wrapper();

  .header {
    padding-top: 32px;
    padding-bottom: 32px;
    position: relative;
    padding-right: 100px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 16px;
    right: 0;
    column-gap: 12px;
  }
}
</style>
