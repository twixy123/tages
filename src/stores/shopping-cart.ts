import type Product from '@/interfaces/responses/product-rack-systems'

import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore({
  id: 'shoppingCard',

  state: () => ({
    products: localStorage.getItem('shopping-cart:products')
      ? JSON.parse(localStorage.getItem('shopping-cart:products') as string) as Product[]
      : null
  }),

  getters: {
    isCartEmty: state => state.products === null || state.products.length === 0
  },

  actions: {
    changeShoppingCartProductsState (product: Product) {
      if (this.isCartEmty) this.products = []

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

      localStorage.setItem('shopping-cart:products', JSON.stringify(this.products))

      return this.products
    }
  }
})