<template>
  <b-modal
    centered
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    :visible="!$store.state.ageConfirmed"
  >
    <div class="text-center">
      <template v-if="$store.state.ageConfirmed === false">
        <h3>Access Denied</h3>
      </template>
      <template v-else>
        <h3>Are you 21+?</h3>
        <b-button @click="handleInput(false)">No</b-button>
        <b-button variant="primary" @click="handleInput(true)">Yes</b-button>
      </template>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    handleInput (value) {
      this.$store.commit('confirmAge', value)
      if (value) {
        this.$emit('confirm')
      }
    }
  }
}
</script>
