<template>
  <button :class="['btn btn--icon btn--badge btn--lg']" @click="openSidebar">
    <HeartFillIcon :class="['red--text']" />
    <span v-if="desireListStore.products?.length" :class="['badge']">
      {{ desireListStore.products.length }}
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DesireListToggleBtn'
})
</script>

<script setup lang="ts">
import HeartFillIcon from '@/assets/icons/heart-fill.svg?component'

import { useSidebarStore } from '@/stores/desire-list-sidebar'
import { useDesireListStore } from '@/stores/desire-list'

const sidebarStore = useSidebarStore()
const desireListStore = useDesireListStore()

function openSidebar () {
  sidebarStore.openSidebar()
}
</script>
