<template>
  <button :class="['btn btn--icon']" @click="openSidebar">
    <HeartIcon :class="['red--text']" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DesireListToggleBtn'
})
</script>

<script setup lang="ts">
import HeartIcon from '@/assets/icons/heart.svg?component'
import { useSidebarStore } from '@/stores/desire-list-sidebar'
const sidebarStore = useSidebarStore()

function openSidebar () {
  sidebarStore.openSidebar()
}
</script>
