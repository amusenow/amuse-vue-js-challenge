<template>
  <Sidebar v-model:visible="visible">
    <nav class="capitalize">
      <ul>
        <li
          v-for="route in routes"
          :key="route.name"
          @click="visible = !visible"
        >
          <router-link :to="route.path">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </Sidebar>

  <Button
    class="block sm:hidden"
    icon="pi pi-align-justify"
    @click="visible = !visible"
  />

  <div class="hidden sm:flex capitalize">
    <div>
      <nav>
        <ul class="grid list-none">
          <li class="col" v-for="route in routes" :key="route.name">
            <router-link :to="route.path">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import { routes } from '@/router/routes';

export default {
  components: { Button, Sidebar },

  setup() {
    const visible = ref(false);
    return { routes, visible };
  }
};
</script>
