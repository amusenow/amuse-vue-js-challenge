<template>
  <div class="card">
    <h2>{{ name }}</h2>
      <p>${{ price }}</p>
  </div>
</template>

<script>
export default ({
  props: [
    "entity_id",
    "name",
    "is_cannabis",
    "manufacturer",
    "url",
    "category",
    "sub_category",
    "image_url",
    "price",
    "thc_percentage"
  ],
})
</script>

<style scoped lang="scss">
  .card {
    padding: 2rem;
    box-shadow: 0px 3px 6px #dddddd;
    margin: 1rem;
    text-align: center;
  }
</style>