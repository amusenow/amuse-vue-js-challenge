<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-initial">
        <img
          class="h-48 w-full object-cover md:w-48"
          :src="imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          {{ product.name }}
        </div>
        <div>
          <table>
            <thead>
              <th>Price</th>
              <th>THC</th>
              <th>Manufacturer</th>
            </thead>
            <tbody>
              <tr>
                <td>${{ product.price }}</td>
                <td>{{ product.thc_percentage }}%</td>
                <td>{{ product.manufacturer }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductOverview",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return `https://res.cloudinary.com/amusenow/w_auto,c_scale/${this.product.image_url}`
    },
  },
};
</script>

<style scoped>

</style>
