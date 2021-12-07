<template>
  <div id="app">
    <img alt="Vue logo" width="200px" src="./assets/amuse-logo.svg">
    <Amuse/>
    <AgeModal
      :dismissed="modalDismissed"
      @ageConfirmed="ageConfirm"
    />
  </div>
</template>

<script>
import Amuse from './components/Amuse.vue'
import AgeModal from './components/AgeModal.vue'

export default {
  name: 'App',
  components: {
    Amuse,
    AgeModal,
  },
  data() {
    return {
      modalDismissed: (this.$cookie.get('modalDismissed') === "true")
    }
  },
  methods: {
    ageConfirm () {
      console.log('got here')
      this.modalDismissed = true
      // Set Cookie so we don't have the popup again
      this.$cookie.set('modalDismissed', true)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-item.active .page-link,
.btn-primary {
  background-color: #F73D99 !important;
  border-color: #F73D99 !important;
}
.btn-outline-primary {
  color: #2c3e50 !important;
  border-color: #2c3e50 !important;
  &:hover {
    background-color: #ccc !important;
  }
}
</style>
