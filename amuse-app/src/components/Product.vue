<template>
  <a :href="productPath">
    <h2>{{ name }} <span>({{ manufacturer }})</span></h2>
    <div class="card">
      <div class="card--inner" :style="{ backgroundImage: 'url(' + imagePath + ')' }">
      </div>
      <div class="card--footer">
        <p class="price">${{ price }}</p>
        <p class="details">{{ category }} <span v-if="thc_percentage != null">({{ thc_percentage }}%)</span></p>
      </div>
    </div>
  </a>
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
    "thc_percentage",
  ],
  computed: {
    imagePath: function() {
      if (!this.image_url) { return }
      else { return `https://res.cloudinary.com/amusenow/w_auto,c_scale,h_320,w_320/${this.image_url}` }
    },
    productPath: function() {
      if (!this.url) { return }
      else { return `https://amuse.com${this.url}` }
    }
  }
})
</script>

<style scoped lang="scss">
  a { 
    color: #2c3e50;
    text-decoration: none;
  }

  h2 {
    margin-top: 1rem 0 0.25rem;
    line-height: 1.6rem;
    font-size: 1.1rem;
    text-align: left;
    height: 52px;
    // padding: 0.5rem;
    // text-shadow: 0 0 6px #aaaaaa;
    span {
      font-weight: 100;
      align-self: flex-end;
    }
  }

  .card {
    box-sizing: border-box;
    box-shadow: 0px 3px 6px #dddddd;
    text-align: center;
    height: 320px;
    max-height: 320px;
    border-radius: 0.25rem;
    position: relative;
    overflow: hidden;
    &:hover {
      box-shadow: 0px 3px 3px #bbbbbb;
      transform: scale(1.01);
    }

    .card--inner {
      padding: 1rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 300px
    }
    .card--footer {
      text-shadow: 0 0 6px #eeeeee;
    }

    .price, 
    .details {
      position: absolute;
      bottom: -0.25rem;
    }
    .price {
      right: 1rem;
      font-weight: 600;
    }      
    .details {
      left: 1rem;
    }

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