<template>
  <div class="cart-block">
    <h1>Cart</h1>
    <table>
      <thead>
      <th>Title</th>
      <th>Price</th>
      <th colspan="2">Count</th>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.title}}</td>
        <td>{{product.price}} $</td>
        <td>{{product.quantity}}</td>
        <td><button class="add" @click.prevent="deleteProductFromCart(product)">X</button></td>
      </tr>
      </tbody>
    </table>
    <p v-if="total===0"> Cart is empty</p>
    <p v-else>Total :{{total}} $</p>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        total: 'cartTotal',
      }),
    },
    methods: {
      ...mapActions({
        addToCart: 'addToCart',
        deleteProductFromCart: 'deleteProductFromCart'
      }),
    },
  }
</script>

<style scoped>
  .cart-block {
    margin: 0 auto;
  }
  table {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tr, td {
    border: 1px solid black;
    padding: 10px;
  }
  .delete {
    margin-left: 10px;
  }
  .add {
    margin-left: 10px;
  }
</style>
