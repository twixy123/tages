<template>
  <div :class="[style['block']]">
    <h1 :class="['header--bold']">
      Комплект стеллажных систем
    </h1>

    <RouterLink :to="getRoutePath('rackSystems')">
      Назад
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'
import getRoutePath from '@/helpers/routes'

export default defineComponent({
  name: 'RackingSystemsPage',

  setup () {
    const style = useCssModule()

    return {
      style,
      RouterLink,
      getRoutePath
    }
  },
})
</script>

<style lang="scss" module>
.block {
  h1 {
    margin-bottom: $offset;
  }
}
</style>
