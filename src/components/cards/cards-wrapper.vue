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

  & > div {
    @include col(4)
  }

  @include lg-block () {
    & > div {
      @include col(3)
    }
  }

  @include md-block () {
    row-gap: 32px;
    @include row-offset(20px);

    & > div {
      @include wrapper-offset(20px)
    }
  }

  @include sm-block () {
    & > div {
      @include col(2)
    }
  }

  @include xs-block () {
    & > div {
      @include col(1)
    }
  }
}
</style>