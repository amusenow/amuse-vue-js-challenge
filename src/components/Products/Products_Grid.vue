<template>
  <div class="products__grid">
    <v-container
      class="category-item"
      sm="12"
      v-for="(group, groupIndex) in items"
      :key="`category-item__${groupIndex}`">
      <h2 class="deep-purple--text">{{ group.categoryTitle }}</h2>

      <v-row>
        <v-col
          class="product-item"
          sm="12"
          v-for="(item, itemIndex) in group.items"
          :key="`product-item__${itemIndex}`">

          <ListItem
            :manufacturer="item.manufacturer"
            :title="item.name"
            :sub-cat="item.sub_category"
            :percentage="item.thc_percentage"
            :img-url="item.image_url"
            :price="item.price"
            :loadItemCallBack="navigateToItem"
            :addItemCallBack="addToCart"/>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import ListItem from '@/components/Products/Products_Grid_ListItem'

export default {
  name: 'category-grid',

  components: {
    ListItem
  },

  props: {
    items: {
      type: Array,
      required: false,
      default: ''
    }
  },

  mounted () {
    console.log(this.items)
  },

  methods: {
    navigateToItem(data) {
      // Trigger route to product page
    },

    addToCart(data) {
      // Trigger add to cart
    }
  }
}
</script>

<style lang="scss">
  .products__grid {

    .category-item {
      margin: {
        bottom: 5rem;
      }

      .product-item {
        padding: 2rem 0;

        border: {
          bottom: 1px solid lightgrey;
        }

        &:last-of-type {
          border: 0;
        }
      }
    }
  }
</style>
