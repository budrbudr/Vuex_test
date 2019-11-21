<template>
  <aside class="sidebar">
    <div class="button-block">
      <button class="sidebar__button">Show Favorites</button>
    </div>
    <ul class="category__list">
      <li class="category__item">Samsung</li>
      <li class="category__item">Iphone</li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: "sidebar"
  }
</script>

<style scoped>
  .sidebar {
    width: 20%;
    margin: 100px 0 0 30px;
  }

  .category__list {
    list-style: none;
    cursor: pointer;
  }

  .category__item {
    margin-top: 10px;
  }

  .sidebar__button {
    margin-left: 20px;
  }
</style>
