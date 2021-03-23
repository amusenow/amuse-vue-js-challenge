<template>
  <div class="container" id="app">
    <Category />
  </div>
</template>

<script>
  import Category from './pages/Category.vue';

  export default {
    name: 'App',
    components: {
      Category
    }
  };
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 50px auto;
    width: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
