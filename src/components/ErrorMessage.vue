<template>
  <div v-text="error" class="text-red-600 text-sm font-bold"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    error: {
      required: true,
      type: String,
    },
  },
});
</script>
