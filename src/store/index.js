import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../static/shop'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    favorite: [],
  },


  getters: {
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
    favoriteProducts(state) {
      return state.favorite.map(favoriteItem => {
        const product = state.products.find(product => product.id === favoriteItem.id);
        return {
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
        }
      })
    }
  },


  actions: {
    fetchProducts(ctx) {
      shop.getProducts(products => {
        ctx.commit('setProducts', products)
      })
    },

    addToCart(ctx, product) {
      const cartItem = ctx.state.cart.find(item => item.id === product.id);
      if (!cartItem) {
        ctx.commit('pushProductToCart', product.id)
      } else {
        ctx.commit('incrementItemQuantity', cartItem)
      }
    },

    addToFavorite(ctx, product) {
      ctx.commit('pushProductToFavorite', product.id)
    },

    removeFavorite(ctx, product) {
      ctx.commit('removeFavoriteProduct', product.id)
    },
    deleteProductFromCart(ctx, product){
      ctx.commit('deleteProduct', product.id)
    }
  },


  mutations: {
    setProducts(state, products) {
      state.products = products
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },

    pushProductToFavorite(state, productId) {
      state.favorite.push({
        id: productId,
      })
    },

    removeFavoriteProduct(state, productId) {
      state.favorite.splice({id: productId}, 1);
    },
    deleteProduct(state, productId) {
      state.cart.splice ({id: productId}, 1)
    }
  }
});
