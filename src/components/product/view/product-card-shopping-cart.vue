<template>
  <div :class="[$style['card'], 'card']">
    <button :class="['btn btn--icon', $style['btn__close']]" @click="onRemove">
      <CrossIcon />
    </button>
    <div :class="['card-image', $style['card-image']]">
      <div
        :class="[
          'card-image__wrapper',
          {
            'card-image__wrapper--empty': !product.image.url,
          },
        ]"
      >
        <span :class="['card-image__empty-icon']">?</span>
        <div v-if="product.image?.url" :class="['card-image__content']">
          <img :src="`${product.image.url}`" alt="">
        </div>
      </div>
    </div>
    <div :class="['card-description p-10', $style['card-description']]">
      <p v-if="product.code" :class="['card-description__code']">
        {{ product.code }}
      </p>
      <h4 :class="['card-description__name', $style['card-description__name']]">
        {{ product.name }}
      </h4>
      <div :class="['card-description__price-wrapper']">
        <p
          v-if="product.price.old_price"
          :class="['card-description__price card-description__price--discount']"
        >
          {{ Math.ceil(product.price.old_price || 0) }}₽
        </p>
        <p :class="['card-description__price']">
          {{ Math.ceil(product.price.current_price) }}₽
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductCardShoppingCart',
})
</script>

<script setup lang="ts">
import type Product from '@/interfaces/responses/product-rack-systems'

import CrossIcon from '@/assets/icons/cross.svg?component'

import { useCssModule } from 'vue'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const emits = defineEmits < {
  (e: 'remove', value: Product): Product
}>()

const $style = useCssModule()

function onRemove () {
  emits('remove', props.product)
}
</script>

<style lang="scss" module>
.card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100px;
  border-bottom: 1px solid map-get($grey, 'darken-3');
  position: relative;
}

.card .btn__close {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 0;

  svg {
    width: 13px;
  }
}

.card .card-image {
  width: 30%;
}

.card .card-description {
  margin-top: auto;

  &__name {
    font-size: 14px;
    margin-bottom: 5px;
  }
}

.card__description {
  padding: 10px;
}
</style>
