<template>
	<v-app id="app">

    <v-app-bar
      fixed
      class="elevation-3">
      <div class="logo-container">
        <!-- Amuse Logo Here -->
      </div>
    </v-app-bar>

    <v-main>
      <v-container px-4>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <small>Amuse</small>
    </v-footer>

    <AgeGate />
	</v-app>
</template>

<script>
import AgeGate from '@/components/_global/Dialogs/Dialog_AgeGate'

export default {
	name: 'app',

  components: {
    AgeGate
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Material+Icons');
	#app {
    .logo-container {
      display: flex;
      width: 56px;
      height: 56px;
      margin: 15px;
    }

    .v-main {
      padding-top: 64px !important;
    }
  }
</style>
