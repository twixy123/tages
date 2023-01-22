<template>
  <ul :class="[$style['breadcrumbs_list']]">
    <BreadcrumbItem path="/" :is-link="route.path !== '/'">
      Главная
    </BreadcrumbItem>
    <BreadcrumbItem
      v-for="breadcrumbItem in breadcrumbs"
      :key="breadcrumbItem.path"
      :path="breadcrumbItem.path"
      :is-link="route.path !== breadcrumbItem.path"
    >
      {{ breadcrumbItem.meta.title || breadcrumbItem.name }}
    </BreadcrumbItem>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreadcrumbsList',
})
</script>

<script setup lang="ts">
import BreadcrumbItem from '@/components/breadcrumbs/breadcrumb-item.vue'

import type { RouteLocationMatched } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed, useCssModule } from 'vue'

const route = useRoute()
const $style = useCssModule()

const breadcrumbs = computed<RouteLocationMatched[]>(() => {
  return route.meta.breadcrumbs as RouteLocationMatched[]
})
</script>

<style lang="scss" module>
.breadcrumbs_list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 10px;
}
</style>
