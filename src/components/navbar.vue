<template>
  <div>
    <nav class="nav-block">
      <ul class="nav-block__list">
        <li class="nav-block__item button"><button>Cart</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .nav-block {
    background: aqua;
    margin-top: -15px;
    padding: 10px 0 10px 0;
  }
  .nav-block__list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  .nav-block__item {

  }
  .button {
    float: right;
  }
</style>
