<template>
  <div :class="[style['block']]">
    <h1>Storage systems Page</h1>

    <RouterLink :to="{name: 'Racking System'}">
      Комплекты стеллажных систем
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'StorageSystemsPage',
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
