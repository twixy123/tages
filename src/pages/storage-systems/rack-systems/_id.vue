<template>
  <div :class="[style['block']]">
    <h1>Комплект стеллажных систем</h1>

    <RouterLink :to="{name: 'Racking System'}">
      Назад
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'RackingSystemsPage',

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
