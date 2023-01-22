import type Product from '@/interfaces/responses/product-rack-systems'
import type { SelectValue } from '@/interfaces/input-fields/select/select-value'

export interface FilterBy extends SelectValue {
  key: keyof Product
}

export interface SortBy {
  key: 'name' | 'current_price'
  value: 'true' | 'false'
}

interface ProductsRequestOptions {
  sortBy?: SortBy
  filterBy?: FilterBy
}

export default ProductsRequestOptions