<template>
  <button type="button" :class="['btn btn--icon', style['action-btn']]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'CardSmallAction',
  setup () {
    const style = useCssModule()

    return {
      style
    }
  },
})
</script>

<style lang="scss" module>
.action-btn {
  @include md-block() {
    width: 24px;
    height: 24px;

    svg {
      width: 16px;
    }
  }
}
</style>