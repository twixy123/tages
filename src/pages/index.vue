<template>
  <div :class="[style['block']]">
    <h1 :class="['header--bold']">
      Tages
    </h1>

    <RouterLink :to="getRoutePath('storageSystems')">
      Системы хранения
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'
import getRoutePath from '@/helpers/routes'

export default defineComponent({
  name: 'MainPage',
  setup () {
    const style = useCssModule()

    return {
      style,
      RouterLink,
      getRoutePath
    }
  }
})
</script>

<style lang="scss" module>
.block {
  h1 {
    margin-bottom: $offset;
  }
}
</style>