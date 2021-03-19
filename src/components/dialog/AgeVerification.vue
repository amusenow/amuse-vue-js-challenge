<template>
  <v-dialog
    content-class="dialog-age-verification"
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <v-card class="d-flex flex-column">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="12">
            <v-img
              alt="Amuse"
              class="logo mb-4"
              src="@/assets/images/misc/amuse-misc-1.jpg"
            />
            <div class="text-center">
              <div class="display-1 font-weight-bold mb-6">
                Relax & Shop The Finest Cannabis Products
              </div>
              <div class="display-1 font-weight-medium">Are you 21+ ?</div>
            </div>
            <v-card-actions class="button-verification">
              <div class="container">
                <v-btn
                  class="button button-verification-yes elevation-0"
                  @click="verify('Yes')"
                  x-large
                  block
                >
                  Yes
                </v-btn>
                <v-btn
                  class="button-verification-no elevation-0"
                  @click="verify('No')"
                  x-large
                  block
                >
                  No
                </v-btn>
              </div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AgeVerification",

  data: () => ({
    dialog: false,
  }),

  created() {
    this.$eventBus.$on("UX_EVENT:AGE_VERIFICATION", this.dialogHandler);
  },

  methods: {
    dialogHandler({ show }) {
      this.dialog = show;
    },

    verify(choice) {
      switch (choice) {
        case "Yes":
          this.dialog = false;
          break;

        case "No":
          this.dialog = true;
          window.open("http://gph.is/1AZu9mN", "_blank");
          break;
      }
    },
  },
};
</script>
