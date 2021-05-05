<template>
  <div class="age_modal">
    <p>Are you over the age of 21?</p>
    <div class="button_holder">
      <button class="over_age" @click="closeModal(true)">Yes</button>
      <button class="under_age" @click="closeModal(false)">No</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgeModal',
  props: {
    ageModalVisible: Boolean
  },
  methods: {
    closeModal(overTwentyOne) {
      this.$emit('clicked', overTwentyOne)
    },
  },
}
</script>

<style >
@import "../assets/css/ageModal.css";
</style>
