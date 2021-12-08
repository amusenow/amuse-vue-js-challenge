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
            placeholder="Filter"
            v-model="filter"
            :options="categories"
            :showClear="true"
            @change="filterProducts"
          />
        </div>

        <div class="col-6 text-right">
          <Dropdown
            optionLabel="label"
            placeholder="Sort By Price"
            v-model="sortKey"
            :options="sortOptions"
            @change="onSortChange($event)"
          />
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

              <i
                :class="`pi ${
                  slotProps.data.is_cannabis ? 'pi-bolt' : 'pi-times'
                }`"
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
                <strong>THC: </strong>
                <span>{{ slotProps.data.thc_percentage }}%</span>
              </div>

              <div class="col-12 sm:col-6">
                <strong>Manufacturer: </strong>
                <span>{{ slotProps.data.manufacturer }}</span>
              </div>

              <div class="col-12 sm:col-6 sm:text-right">
                <strong>SKU: </strong>
                <span>{{ slotProps.data.sku }}</span>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="grid">
              <div class="col-6">
                <a
                  target="_self"
                  :href="`https://amuse.com${slotProps.data.url}`"
                >
                  Read More
                </a>
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
  </DataView>
</template>

<script>
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import ProgressSpinner from 'primevue/progressspinner';
import { getAllProducts } from '@/services/api-util';

export default {
  components: {
    Button,
    Card,
    DataView,
    Dropdown,
    ProgressSpinner
  },

  setup() {
    const categories = ref([]);
    const filter = ref();
    const layout = ref('grid');
    const loading = ref(true);
    const originalProducts = ref([]);
    const products = ref([]);
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ]);

    const addToCart = (item) => console.table(item);

    const getCategories = () => {
      products.value.forEach((product) => {
        if (!categories.value.includes(product.category.toLowerCase())) {
          categories.value.push(product.category.toLowerCase());
        }
      });
      loading.value = false;
    };

    const getData = async () => {
      products.value = await getAllProducts();
      originalProducts.value = JSON.parse(JSON.stringify(products.value));
      getCategories();
    };

    const filterProducts = () => {
      if (filter.value)
        products.value = originalProducts.value.filter(
          (product) => product.category.toLowerCase() === filter.value
        );
      else products.value = originalProducts.value;
    };

    const onSortChange = (event) => {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
      } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
      }
    };

    onMounted(() => getData());

    return {
      categories,
      filter,
      products,
      layout,
      sortKey,
      sortOrder,
      sortField,
      sortOptions,
      loading,
      addToCart,
      filterProducts,
      onSortChange
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

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

.pi {
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  &.pi-bolt {
    color: green;
  }
}
</style>
