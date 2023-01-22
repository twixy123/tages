<template>
  <AppSelect
    :model-value="material"
    :options="options"
    :placeholder="placeholder"
    :is-loading="!materialStore.isLoaded"
    @update:model-value="onChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MaterialsSelect',
})
</script>

<script setup lang="ts">
import AppSelect from '@/components/ui/inputs/app-select.vue'

import type SelecOption from '@/interfaces/input-fields/select/select-option'
import type SmartSelectValue from '@/interfaces/input-fields/select/select-value'

import { ref, withDefaults, onBeforeMount, computed } from 'vue'

import { useMaterialStore } from '@/stores/materials'

interface Props {
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Метериал',
})

const emits = defineEmits<{
  (e: 'change', value: SmartSelectValue): SmartSelectValue
}>()

const materialStore = useMaterialStore()

const material = ref<SmartSelectValue>(null)

const options = computed<SelecOption[]>(() => {
  return materialStore.materials.map((material) => {
    return {
      text: material.name,
      value: {
        value: material.id,
        key: 'material',
      },
      key: 'material',
    }
  })
})

onBeforeMount(() => {
  if (!materialStore.isMaterialsIncludesElements) {
    materialStore.getMaterials()
  }
})

function onChange (val: SmartSelectValue) {
  material.value = val
  emits('change', val)
}
</script>
