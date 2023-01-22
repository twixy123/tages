<template>
  <div :class="[style['actions']]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'CardSmallActionsWrapper',
  setup () {
    const style = useCssModule()

    return {
      style
    }
  },
})
</script>

<style lang="scss" module>
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 11px;
}
</style>
