<template>
  <DataView :value="categories" :paginator="true" :rows="9">
    <template #header>
      <div class="grid">
        <div>
          <Dropdown optionLabel="label" placeholder="Sort By Price" />
        </div>

        <div>
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </div>
    </template>

    <template #list="slotProps">
      <pre>
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
      </pre>
    </template>

    <template #grid="slotProps">
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
import { getCategories } from '@/services/api-util';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown';

export default {
  components: { DataView, DataViewLayoutOptions, Dropdown },

  setup() {
    const layout = ref('grid');
    const categories = ref([]);
    const getData = async () => (categories.value = await getCategories());
    console.log(categories.value);
    onMounted(() => getData());
    return { categories, layout };
  }
};
</script>
