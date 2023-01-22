<template>
  <div :class="[$style['card'], 'card']">
    <div v-if="props.atDiscount" :class="[$style['card__discount']]">
      Скидка
    </div>
    <div :class="[$style['card-image'], 'card-image']">
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
    <div :class="['card-description']">
      <p v-if="product.code" :class="['card-description__code']">
        {{ product.code }}
      </p>
      <h4 :class="['card-description__name']">
        {{ product.name }}
      </h4>
      <div :class="['card-description__price-wrapper']">
        <p
          v-if="props.atDiscount"
          :class="['card-description__price card-description__price--discount']"
        >
          {{ Math.ceil(product.price.old_price || 0) }}₽
        </p>
        <p :class="['card-description__price']">
          {{ Math.ceil(product.price.current_price) }}₽
        </p>
      </div>
    </div>

    <CardSmallActionsWrapper :class="[$style['card__actions']]">
      <CardSmallAction
        @click="shoppingCartStore.changeShoppingCartProductsState(product)"
      >
        <CircleChecked v-if="inCart" :class="['green--text']" />
        <ShoppingCartIcon v-else />
      </CardSmallAction>
      <CardSmallAction
        @click="desireListStore.changeDesireListProductsState(product)"
      >
        <HeartFillIcon v-if="inDesireList" :class="['red--text']" />
        <HeartIcon v-else />
      </CardSmallAction>
    </CardSmallActionsWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductCard',
})
</script>

<script setup lang="ts">
import CardSmallActionsWrapper from '@/components/cards/card-small-actions-wrapper.vue'
import CardSmallAction from '@/components/cards/card-small-action.vue'

import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg?component'
import CircleChecked from '@/assets/icons/circle-checked.svg?component'
import HeartIcon from '@/assets/icons/heart.svg?component'
import HeartFillIcon from '@/assets/icons/heart-fill.svg?component'

import type Product from '@/interfaces/responses/product-rack-systems'

import { useCssModule, withDefaults, computed } from 'vue'
import { useShoppingCartStore } from '@/stores/shopping-cart'
import { useDesireListStore } from '@/stores/desire-list'

interface Props {
  product: Product
  atDiscount?: boolean
}

const $style = useCssModule()
const props = withDefaults(defineProps<Props>(), {
  atDiscount: false,
})
const shoppingCartStore = useShoppingCartStore()
const desireListStore = useDesireListStore()

const isProductHasCode: boolean = !!props.product.code
const keyToMatch: 'code' | 'id' = isProductHasCode ? 'code' : 'id'

const inCart = computed<boolean | undefined>(() => {
  return shoppingCartStore.products?.some((_product) => {
    return _product[keyToMatch] === props.product[keyToMatch]
  })
})

const inDesireList = computed<boolean | undefined>(() => {
  return desireListStore.products?.some((_product) => {
    return _product[keyToMatch] === props.product[keyToMatch]
  })
})
</script>

<style lang="scss" module>
.card {
  position: relative;
  border: 1px solid map-get($grey, 'lighten-5');
  padding: 10px 12px;
  width: 100%;
  height: 100%;
  font-family: 'sf-ui-text';
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__discount {
    position: absolute;
    top: 8px;
    left: 0;
    color: map-get($shades, 'white');
    font-family: 'sf-pro-display';
    font-weight: 500;
    font-size: 14px;
    background: map-get($red, 'base');
    padding: 3px 16px;
    line-height: 1.3;
    z-index: 10;

    @include md-block() {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 11px;
    }
  }
}

.card-image {
  width: calc(100% - 98px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 23px;

  @include lg(width, calc(100% - 60px));
  @include md(width, calc(100% - 40px));
  @include xs(width, calc(100% - 80px));
}

.card__actions {
  position: absolute;
  bottom: 4px;
  right: 14px;
  justify-content: flex-end;
}
</style>
