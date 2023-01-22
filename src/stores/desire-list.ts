import type Product from '@/interfaces/responses/product-rack-systems'

import { defineStore } from 'pinia'

export const useDesireListStore = defineStore({
  id: 'desireList',

  state: () => ({
    products: localStorage.getItem('desire_list:products')
      ? JSON.parse(localStorage.getItem('desire_list:products') as string) as Product[]
      : null
  }),

  getters: {
    isDesireListEmty: state => state.products === null || state.products.length === 0
  },

  actions: {
    changeDesireListProductsState (product: Product) {
      if (this.isDesireListEmty) this.products = []

      const keyToMatch = product.code ? 'code' : 'id'
      
      const productInShoppingCart = this.products!.some(_product => {
        return _product[keyToMatch] === product[keyToMatch]
      })

      if (productInShoppingCart) {
        this.products = this.products!.filter(_product => {
          return _product[keyToMatch] !== product[keyToMatch]
        })
      } else {
        this.products!.push(product)
      }

      localStorage.setItem('desire_list:products', JSON.stringify(this.products))

      return this.products
    }
  }
})