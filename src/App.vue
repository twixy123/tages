<template>
  <transition name="fade">
    <component :is="currentComponent" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<script setup lang="ts">
import MainLayout from '@/layouts/main-layout.vue'

import { shallowRef } from 'vue'

const currentComponent = shallowRef(MainLayout)
</script>

<style scoped></style>
