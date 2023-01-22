<template>
  <div :class="[$style['block']]">
    <AppInlineLoader v-if="isLoading" :class="[$style['loader']]" />
    <p v-if="!value" :class="$style['placeholder']">
      {{ placeholder }}
    </p>
    <select :value="value" @change="handleChange">
      <option
        v-for="option in selectOptions"
        :key="option.idValue"
        :value="option.idValue"
      >
        {{ option.text }}
      </option>
    </select>
    <span :class="$style['swap-btn']">
      <ArrowDownIcon />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppSelect',
})
</script>

<script setup lang="ts">
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?component'
import AppInlineLoader from '../app-inline-loader.vue'

import type InputValue from '@/interfaces/input-fields/input-value'
import type SelectOption from '@/interfaces/input-fields/select/select-option'
import type SmartSelectValue from '@/interfaces/input-fields/select/select-value'

import { useCssModule, computed, withDefaults } from 'vue'

interface SmartSelectOption extends SelectOption {
  idValue: string
}

interface Props {
  modelValue: SmartSelectValue
  options: SelectOption[]
  placeholder: string
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select',
  modelValue: null,
  isLoading: false,
})
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: SmartSelectValue): SmartSelectValue
}>()

const $style = useCssModule()

const value = computed<InputValue>(() => {
  return createUniqValue(props.modelValue)
})

const selectOptions = computed<SmartSelectOption[]>(() => {
  const options = props.options.map((option) => {
    const idValue = createUniqValue(option.value)

    return {
      ...option,
      idValue,
    } as SmartSelectOption
  })

  if (options.length === 0) {
    const emptyOption: SmartSelectOption = {
      text: 'Список опций пуст',
      value: null,
      key: 'select',
      idValue: 'null',
    }

    options.unshift(emptyOption)
  } else if (!options.some((option) => option.value === null)) {
    const nullOption: SmartSelectOption = {
      text: props.placeholder || 'Select',
      value: null,
      key: 'select',
      idValue: 'null',
    }

    options.unshift(nullOption)
  }

  return options
})

function createUniqValue (value: SmartSelectValue): string {
  return value instanceof Object ? `${value.value}_${value.key}` : `${value}`
}

function handleChange (e: Event) {
  const value = (e.target as HTMLSelectElement).value
  const option: SmartSelectOption | undefined = selectOptions.value.find(
    (_options) => {
      return _options.idValue === value
    }
  )

  if (option) {
    emits('update:modelValue', option.value)
  } else {
    emits('update:modelValue', value)
  }
}
</script>

<style lang="scss" module>
$input-offset: 40px;
$left-padding: 16px;

$input-offset-md: 30px;

.block {
  position: relative;
  background: map-get($grey, 'lighten-6');
  font-family: 'sf-pro-display';
  font-size: 14px;
  font-weight: 400;
  line-height: $input-offset;
  letter-spacing: 0.3px;

  select {
    cursor: pointer;
    background: transparent;
    width: 100%;
    outline: none;
    padding-right: $input-offset;
    padding-left: $left-padding;
    appearance: none;
    position: relative;
    z-index: 2;
    font: inherit;
  }

  .swap-btn {
    height: $input-offset;
    width: $input-offset;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 1;
    
    svg {
      width: 18px;
    }
  }

  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    color: map-get($shades, 'black');
    padding-left: $left-padding;
    font: inherit;
  }

  @include md-block() {
    line-height: $input-offset-md;
    font-size: 12px;

    select {
      padding-right: $input-offset-md;
    }

    .swap-btn {
      height: $input-offset-md;
      width: $input-offset-md;

      svg {
        width: 13px;
      }
    }
  }
}
.loader {
  position: absolute !important;
  top: 0;
  left: 0;
}
</style>
