<template>
  <div :class="[$style['wrapper']]">
    <span :class="[$style['wrapper__description']]">
      <slot name="description" />
    </span>
    <div :class="$style['wrapper__field']">
      <slot name="field" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FieldDescriptionWrapper'
})
</script>

<script setup lang="ts">
import { useCssModule } from 'vue'

const $style = useCssModule()
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;

  &__description {
    display: block;
    font-size: 12px;
    font-family: 'sf-pro-display';
    color: map-get($grey, 'darken-3');
    line-height: 1.5;
    padding-left: 16px;
    margin-bottom: 6px;
  }
}
</style>
