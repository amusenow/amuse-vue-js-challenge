<template>
  <div class="container">
    <b-row class="w-100">
      <b-col md="1" class="sidebar">
        <CategoryFilter class="sticky-top" />
      </b-col>
      <b-col>
        <ProductList />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.sidebar {
  min-width: 200px;
}
</style>
