<template>
  <div v-if="showOverlay" :class="[$style['sidebar']]">
    <OverlayWrapper :class="[$style['sidebar__overlay'], ...overlayClasses]">
      <div
        :class="[
          $style['sidebar__wrapper'],
          {
            [$style['sidebar__wrapper--open']]: showSidebar,
          },
          ...wrapperClasses
        ]"
      >
        <button
          :class="['btn btn--icon', $style['sidebar__close']]"
          @click="onClose"
        >
          <CrossIcon />
        </button>
        <slot />
      </div>
    </OverlayWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarWrapper',
})
</script>

<script setup lang="ts">
import OverlayWrapper from '@/components/overlays/overlay-wrapper.vue'
import CrossIcon from '@/assets/icons/cross.svg?component'

import { useCssModule, withDefaults, watch, ref } from 'vue'

interface Props {
  isOpen: boolean
  overlayClasses?: string[]
  wrapperClasses?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  overlayClasses: () => [],
  wrapperClasses: () => []
})
const emits = defineEmits(['close'])

const $style = useCssModule()

const showOverlay = ref(false)
const showSidebar = ref(false)
const watcherTimeout = ref<any>(null)

watch(
  () => props.isOpen,
  (val) => {
    clearTimeout(watcherTimeout.value)

    if (val) {
      showOverlay.value = val
      watcherTimeout.value = setTimeout(() => {
        showSidebar.value = val
      }, 100)
    } else {
      showSidebar.value = val

      watcherTimeout.value = setTimeout(() => {
        showOverlay.value = val
      }, 600)
    }
  }
)

function onClose () {
  emits('close')
}
</script>

<style lang="scss" module>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 100;
}

.sidebar__wrapper {
  padding: 16px;
  height: 100vh;
  width: 320px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  background: map-get($shades, 'white');
  border-left: 1px solid map-get($grey, 'darken-3');
  box-sizing: border-box;
  transition: all 0.5s ease;

  &--open {
    transform: translateX(0);

    .sidebar__close {
      opacity: 1;
    }
  }
}

.sidebar__close {
  position: absolute;
  top: 10px;
  left: -40px;
  opacity: 0;
}
</style>
