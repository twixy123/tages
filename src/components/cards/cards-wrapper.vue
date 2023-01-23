<template>
  <div :class="[style['wrapper']]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'CardsWrapper',
  setup () {
    const style = useCssModule()

    return {
      style
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  row-gap: 40px;
  align-items: stretch;

  @include row-wrap();

  & > * {
    @include col(4)
  }

  @include lg-block () {
    & > * {
      @include col(3)
    }
  }

  @include md-block () {
    row-gap: 32px;
    @include row-offset(20px);

    & > * {
      @include wrapper-offset(20px)
    }
  }

  @include sm-block () {
    & > * {
      @include col(2)
    }
  }

  @include xs-block () {
    & > * {
      @include col(1)
    }
  }
}
</style>