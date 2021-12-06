<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <!-- <img :src="imagePath"> -->
    <p>${{ price }}</p>
    <p>{{ category }}</p>
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
  computed: {
    imagePath: function() {
      return `https://res.cloudinary.com/amusenow/w_auto,c_scale/${this.image_url}`;
    }
  }
})
</script>

<style scoped lang="scss">
  .card {
    padding: 2rem;
    box-shadow: 0px 3px 6px #dddddd;
    // margin: 1rem;
    text-align: center;
  }
</style>

// {
//    "entity_id": 1221,
//    "sku": "FL000980",
//    "is_cannabis": 1,
//    "manufacturer": "Perfect",
//    "name": "Happy Camper 1g ($1 Deal - Discount auto-applies at checkout)",
//    "url": "/brands/perfect/happy-camper-1g/",
//    "category": "Flower",
//    "sub_category": "Pre-pack",
//    "image_url": "FL000980/Perfect_FL_1gm_HappyCamper_PandP",
//    "price": 18,
//    "thc_percentage": 34.9,
//    "quantity": 0
//  },