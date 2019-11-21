<template>
  <div>
    <navbar/>
    <div class="container">
      <sidebar/>
      <product-list/>
    </div>
    <cart/>
    <favorite/>
  </div>

</template>

<script>
  import navbar from "./components/navbar";
  import ProductList from "./components/product-list";
  import Cart from "./components/cart";
  import Sidebar from "./components/sidebar";
  import Favorite from "./components/favorite";


  export default {
    name: 'app',
    components: {
      Favorite,
      Sidebar,
      Cart,
      ProductList,
      navbar
    },

  }
</script>

<style scoped>
  .container {
    display: flex;
  }
</style>
