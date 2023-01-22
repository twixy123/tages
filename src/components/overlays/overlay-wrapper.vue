<template>
  <div :class="[style['overlay']]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'MainOverlayWrapper',

  setup () {
    const style = useCssModule()

    return {
      style
    }
  },
})
</script>

<style lang="scss" module>
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(map-get($shades, 'white'), .7);
}
</style>
