<template>
  <div :class="[$style['block']]">
    <h1>Комплекты стеллажных систем</h1>

    <InlineBarWrapper :class="[$style['select-bar']]">
      <FieldDescriptionWrapper>
        <template #description>
          Сортировать по:
        </template>
        <template #field>
          <AppSelect
            :model-value="sortBy"
            :options="sortByOptions"
            placeholder="Сортировать"
            @update:model-value="onSort"
          />
        </template>
      </FieldDescriptionWrapper>
      <FieldDescriptionWrapper>
        <template #description>
          Материал
        </template>
        <template #field>
          <MaterialsSelect placeholder="Фильтровать" @change="onFilter" />
        </template>
      </FieldDescriptionWrapper>
    </InlineBarWrapper>

    <CardsWrapper :class="[$style['product-cards']]">
      <div v-for="product in productRackSystemStore.products" :key="product.id">
        <ProductCard
          :product="product"
          :at-discount="!!product.price.old_price"
        />
      </div>
    </CardsWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RackingSystemsPage',
})
</script>

<script setup lang="ts">
import InlineBarWrapper from '@/components/bars/inline-bar-wrapper.vue'
import FieldDescriptionWrapper from '@/components/bars/field-description-wrapper.vue'
import MaterialsSelect from '@/components/bars/extensions/view/materials-select.vue'
import AppSelect from '@/components/ui/inputs/app-select.vue'
import CardsWrapper from '@/components/cards/cards-wrapper.vue'
import ProductCard from '@/components/product/view/product-card.vue'

import type SelecOption from '@/interfaces/input-fields/select/select-option'
import type SmartSelectValue from '@/interfaces/input-fields/select/select-value'
import type ProductsRequestOptions from '@/interfaces/requests/product-rack-systems'
import type {
  FilterBy,
  SortBy,
} from '@/interfaces/requests/product-rack-systems'

import { useCssModule, ref, onBeforeMount, computed } from 'vue'
import { useProductsRackSystemsStore } from '@/stores/products-rack-systems'

import { priceOptions, nameOptions } from '@/constants/select-options'

const $style = useCssModule()
const productRackSystemStore = useProductsRackSystemsStore()

const filterBy = ref<SmartSelectValue>(null)
const sortBy = ref<SmartSelectValue>(null)
const sortByOptions: SelecOption[] = [
  {
    text: 'Сортировать',
    value: null,
    key: 'sort',
  },
  ...priceOptions,
  ...nameOptions,
]

const requestOptions = computed<ProductsRequestOptions>(() => {
  const options: ProductsRequestOptions = {}

  if (filterBy.value) {
    options.filterBy = filterBy.value as FilterBy
  }

  if (sortBy.value) {
    options.sortBy = sortBy.value as SortBy
  }

  return options
})

onBeforeMount(() => {
  getProducts()
})

function getProducts () {
  productRackSystemStore.getProducts(requestOptions.value)
}

function onSort (val: SmartSelectValue) {
  sortBy.value = val
  getProducts()
}

function onFilter (val: SmartSelectValue) {
  filterBy.value = val
  getProducts()
}
</script>

<style lang="scss" module>
.block {
  h1 {
    margin-bottom: $offset;

    @include sm(font-size, 28px);
    @include xs(font-size, 24px);
    @include xxs(font-size, 20px);
  }
}

.select-bar {
  margin-bottom: 41px;

  & > * {
    width: 288px;
  }

  @include md-block {
    width: 60%;

    & > * {
      width: calc(50% - ($offset_md / 2));
    }
  }

  @include sm(width, 100%);

  @include xs-block {
    & > * {
      width: 100%;
    }
  }
}

.product-cards {
  margin-bottom: 100px;
}
</style>
