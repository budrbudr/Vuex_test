<template>
  <div class="container">
    <div class="product-cart" v-for="product in products">
      <div class="product-img">
        <img class="product__img" :src="product.image" :alt="product.title">
      </div>
      <div class="product-title">
        <span class="product-title__text">{{product.title}}</span>
      </div>
      <div class="product-descr">
        <span class="product-descr__text">{{product.description}}</span>
      </div>
      <div class="product-price">
        <span class="product-price__text">{{product.price}} $</span>
      </div>
      <div class="product-button">
        <button class="product__button cart" @click="addToCart(product)">
          Add to cart
        </button>
        <button class="product__button favorite" @click.prevent="addToFavorite(product)">Add to favorite</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState({
        products: state => state.products
      }),
    },

    methods: {
      ...mapActions({
        fetchProducts: 'fetchProducts',
        addToCart: 'addToCart',
        addToFavorite: 'addToFavorite',
      }),

    },


    created() {
      this.fetchProducts()
    }
  }
</script>

<style scoped>
  .container {
    width: 80%;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    margin: 20px auto;

  }

  .product-cart {
    width: 23%;
    height: 320px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;

  }

  .product-img {
    height: 70%;
    width: 80%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .product__img {
    width: 50%;
    height: 100%;
  }

  .product-title {
    text-align: center;
  }

  .product-title__text {
    color: gray;
  }

  .product-descr {
    text-align: left;
    margin-top: 10px;
  }

  .product-price {
    text-align: left;
    margin-top: 10px;
  }

  .product-button {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }

</style>
