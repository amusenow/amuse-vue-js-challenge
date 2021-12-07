<template>
    <div class="modal">
        <b-modal
            id="age-modal"
            ref="age-modal"
            hide-footer
            title="Age Restricted"
            no-close-on-backdrop
            no-close-on-esc
            hide-header-close
        >
            <div class="d-block text-center">
                <h3>You must confirm that you are 21 years of age or older.</h3>
            </div>
            <b-button class="mt-3 btn-primary" block @click="affirmative">I am 21+</b-button>
            <b-button class="mt-2" variant="outline-primary" block @click="negative">I am not old enough</b-button>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: 'AgeModal',
  props: {
    dismissed: Boolean
  },
  mounted () {
    if (!this.dismissed) {
      this.$bvModal.show('age-modal')
    }
  },
  methods: {
      affirmative () {
          this.$emit('ageConfirmed')
          this.$bvModal.hide('age-modal')
      },
      negative () {
          window.location = 'https://pbskids.org/'
      }
  }
}
</script>

<style scoped>

</style>