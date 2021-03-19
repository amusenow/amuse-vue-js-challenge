<template>
  <div class="footer">
    <!-- <v-footer app height="auto" class="text-right">
      <v-layout justify-center>
        <v-flex py-3 caption white--text xs12>
          &copy; {{ currentYear }} Open Road Delivery Holdings, Inc. <br />
          All rights reserved
        </v-flex>
      </v-layout>
    </v-footer> -->
  </div>
</template>

<script>
export default {
  name: "Footer",

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
