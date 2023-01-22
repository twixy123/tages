<template>
  <div :class="[$style['bar-wrapper']]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from 'vue'

export default defineComponent({
  name: 'InlineBarWrapper',
  setup () {
    const style = useCssModule()

    return {
      style
    }
  }
})
</script>

<style lang="scss" module>
.bar-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: $offset;
  row-gap: $offset;

  @include md(row-gap, $offset_md);
  @include md(column-gap, $offset_md);
}
</style>
