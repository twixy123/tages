<template>
  <OverlayWrapper :class="[style['inline-loading']]">
    <span>&bull;</span>
    <span>&bull;</span>
    <span>&bull;</span>
  </OverlayWrapper>
</template>

<script lang="ts">
import OverlayWrapper from '@/components/overlays/overlay-wrapper.vue'
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'AppInlineLoader',

  components: {
    OverlayWrapper
  },

  setup () {
    const style = useCssModule()

    return {
      style,
    }
  }
})
</script>

<style lang="scss" module>
.inline-loading {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  span {
    animation: inline-loader 1.5s infinite;
    color: map-get($grey, 'darken-3');

    &:nth-child(2) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
}

@keyframes inline-loader {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
