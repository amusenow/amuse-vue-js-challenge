<template>
  <div
    v-if="!passedAgeGate"
    class="fixed z-10 bg-black bg-opacity-80 w-full h-full top-0 left-0 flex flex-col items-center justify-center"
  >
    <div
      class="rounded-lg bg-white p-6 max-w-xs w-full flex flex-col space-y-6"
    >
      <h1 class="font-bold text-2xl text-center">Are you 21 or older?</h1>

      <div class="flex justify-center space-between space-x-3">
        <GenericButton @click="confirm()">Yes</GenericButton>
        <GenericButton tag="a" href="https://crayola.com">No</GenericButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const AGE_GATE_TOKEN = "yes";

export default Vue.extend({
  data() {
    return {
      passedAgeGate:
        window.sessionStorage.getItem("age-gated") === AGE_GATE_TOKEN,
    };
  },
  methods: {
    confirm() {
      // show the age gate once per browser session
      window.sessionStorage.setItem("age-gated", AGE_GATE_TOKEN);

      // reflect that confirmation *now*, causing the gate to disappear
      this.passedAgeGate = true;
    },
  },
});
</script>
