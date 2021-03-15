<template>
  <div class="item-wrapper">
    <img :src="getImgUrl" />
    <div class="item-name">
      {{ item.name }}
    </div>
    <div>from {{ item.manufacturer }}</div>
    <div>
      {{ getProductType }}
    </div>
    <div>
      {{ getPriceFormatted }}
    </div>
  </div>
</template>

<script>
export default {
  name: "store",
  props: ["item"],
  computed: {
    getImgUrl: function () {
      return (
        "https://res.cloudinary.com/amusenow/w_auto,c_scale/" +
        this.item.image_url
      );
    },
    getProductType: function () {
      return this.item.category + ", " + this.item.sub_category;
    },
    getPriceFormatted: function () {
      return "$" + this.item.price;
    },
  },
  data: function () {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid #fec89a;
  font-size: 12px;
  height: 300px;
}

.item-name {
  padding-top: 10px;
  font-size: 15px;
  font-weight: 800;
}
</style>
