<template>
  <component
    :disabled="disabled"
    :class="{ 'opacity-70 pointer-events-none': disabled }"
    @click="$emit('click')"
    :is="tag"
    class="whitespace-nowrap font-bold text-white py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded"
  >
    <slot>Submit</slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    tag: {
      type: String,
      required: false,
      default: (): string => "button",
      validator: (value) => ["button", "a"].includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: (): boolean => false,
    },
  },
});
</script>
