<template>
  <ProgressSpinner v-if="loading" />

  <DataView
    :layout="layout"
    :paginator="true"
    :rows="9"
    :sortField="sortField"
    :sortOrder="sortOrder"
    :value="products"
    v-else
  >
    <template #header>
      <div class="grid">
        <div class="col-6">
          <Dropdown
            optionLabel="label"
            placeholder="Sort By Price"
            v-model="sortKey"
            :options="sortOptions"
          />
        </div>

        <div class="col-6 text-right">
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </div>
    </template>

    <template #grid="slotProps">
      <div class="col-12 md:col-6 lg:col-4 xl:col-3">
        <Card>
          <template #content>
            <div class="grid">
              <img
                :alt="slotProps.data.name"
                :src="`https://res.cloudinary.com/amusenow/w_auto,c_scale/f_auto,q_auto,w_384/${slotProps.data.image_url}`"
              />

              <div class="col-12">
                <h3>{{ slotProps.data.name }}</h3>
              </div>

              <div class="col-12 sm:col-6">
                <strong>Price: </strong>
                <span>${{ slotProps.data.price }}</span>
              </div>

              <div class="col-12 sm:col-6 sm:text-right">
                <strong>Category: </strong>
                <span>{{ slotProps.data.category }}</span>
              </div>

              <div class="col-12 sm:col-6">
                <strong>Sub Category: </strong>
                <span>{{ slotProps.data.sub_category }}</span>
              </div>

              <div class="col-12 sm:col-6 sm:text-right">
                <strong>THC Percentage: </strong>
                <span>{{ slotProps.data.thc_percentage }}</span>
              </div>

              <div class="col-12 sm:col-6">
                <strong>Manufacturer: </strong>
                <span>{{ slotProps.data.manufacturer }}</span>
              </div>

              <div class="col-12 sm:col-6 sm:text-right">
                <strong>SKU: </strong>
                <span>{{ slotProps.data.sku }}</span>
              </div>

              <!-- <p>{{ slotProps.data.entity_id }}</p> -->
              <!-- <p>{{ slotProps.data.is_cannabis }}</p> -->
              <!-- <p>{{ slotProps.data.quantity }}</p> -->
            </div>
          </template>

          <template #footer>
            <div class="grid">
              <div class="col-6">
                <a target="_self" :href="slotProps.data.url">Read More</a>
              </div>

              <div class="col text-right">
                <Button
                  label="Add to Cart"
                  @click="addToCart(slotProps.data)"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </template>

    <template #list="slotProps">
      {{ slotProps.data.category }}
      {{ slotProps.data.entity_id }}
      {{ slotProps.data.image_url }}
      {{ slotProps.data.is_cannabis }}
      {{ slotProps.data.manufacturer }}
      {{ slotProps.data.name }}
      {{ slotProps.data.price }}
      {{ slotProps.data.quantity }}
      {{ slotProps.data.sku }}
      {{ slotProps.data.sub_category }}
      {{ slotProps.data.thc_percentage }}
      {{ slotProps.data.url }}
    </template>
  </DataView>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getAllProducts } from '@/services/api-util';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown';
import ProgressSpinner from 'primevue/progressspinner';

export default {
  components: {
    Button,
    Card,
    DataView,
    DataViewLayoutOptions,
    Dropdown,
    ProgressSpinner
  },

  setup() {
    const categories = ref([]);
    const layout = ref('grid');
    const loading = ref(true);
    const products = ref([]);
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ]);

    const addToCart = (item) => {
      console.log('add to cart', item);
    };

    const changeLayout = () => {
      layout.value = layout.value === 'grid' ? 'list' : 'grid';
    };

    const getCategories = () => {
      products.value.forEach((product) => {
        if (!categories.value.includes(product.category.toLowerCase())) {
          categories.value.push(product.category.toLowerCase());
        }
      });
      console.log(categories.value);
      loading.value = false;
    };

    const getData = async () => {
      products.value = await getAllProducts();
      getCategories();
    };

    onMounted(() => getData());

    return {
      products,
      layout,
      sortKey,
      sortOrder,
      sortField,
      sortOptions,
      loading,
      addToCart,
      changeLayout
    };
  }
};
</script>

<style lang="scss" coped>
.p-card {
  height: 100%;
}

.p-component {
  position: relative;
  &.p-button {
    bottom: 1rem;
    right: 1rem;
    position: absolute;
  }
}

img {
  width: 100%;
}
</style>
