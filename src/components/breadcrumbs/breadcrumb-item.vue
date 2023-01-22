<template>
  <li :class="[$style['breadcrumb']]">
    <RouterLink v-if="props.isLink" :to="props.path">
      <slot />
    </RouterLink>
    <span v-else>
      <slot />
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreadcrumbItem',
})
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCssModule } from 'vue'

const props = defineProps<{
  path: string
  isLink: boolean
}>()

const $style = useCssModule()
</script>

<style lang="scss" module>
.breadcrumb {
  * {
    font-weight: 400;
  }

  a {
    margin-right: 15px;

    @include md(margin-right, 10px);
    @include sm(margin-right, 5px);
  }

  &:not(:last-child) {
    a {
      &::after {
        content: '/';
        margin-left: 15px;

        @include md(margin-left, 10px);
        @include sm(margin-left, 5px);
      }
    }
  }

  @include md(font-size, 14px);
}
</style>
