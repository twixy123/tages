import type Product from '@/interfaces/responses/product-rack-systems'
import type ProductsRequestOptions from '@/interfaces/requests/product-rack-systems'

import { defineStore } from 'pinia'

import productResponse from '@/constants/items.json'

export const useProductsRackSystemsStore = defineStore({
  id: 'ProductsRackSystems',
  state: () => {
    return {
      products: [] as Product[]
    }
  },
  actions: {
    getProducts (options?: ProductsRequestOptions): Product[] {      
      let products = JSON.parse(JSON.stringify(productResponse)) as Product[]

      this.products = []

      if (options?.filterBy) {
        products = products.filter(product => {
          return `${product[options.filterBy!.key]}` === `${options.filterBy!.value}`
        })
      }

      if (options?.sortBy) {
        const increaseToRightCase = options.sortBy.value === 'true' ? 1 : -1

        switch (options.sortBy.key) {
          case 'name':
            products = products.sort((a, b) => {
              return sortProducts(a.name, b.name, increaseToRightCase)
            })
            break
          case 'current_price':

            products = products.sort((a, b) => {
              return sortProducts(a.price.current_price, b.price.current_price, increaseToRightCase)
            })
            break
        }
      }

      this.products = products

      return this.products
    }
  }
})

function sortProducts (a: number | string, b: number | string, increase: number) {
  return a > b ? increase : increase * -1
}