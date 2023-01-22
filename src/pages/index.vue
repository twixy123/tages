<template>
  <div :class="[style['block']]">
    <h1>Tages</h1>

    <RouterLink :to="{name: 'Storage Systems'}">
      Системы хранения
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'MainPage',
  setup () {
    const style = useCssModule()

    return {
      style,
      RouterLink
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