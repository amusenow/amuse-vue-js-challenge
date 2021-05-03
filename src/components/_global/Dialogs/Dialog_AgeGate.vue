<template>
  <v-dialog
      persistent
      v-model="ageGateState"
      width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Are you 21+
        </v-card-title>

        <v-card-text>
          You must be at least 21 years old to continue
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            class="deep-purple"
            text
            @click="confirmAge(true)">
            Yes
          </v-btn>
          <v-btn
            dark
            class="grey"
            text
            @click="confirmAge(false)">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import {
  VUEX_DIALOG_AGEGATE_SET_STATE
} from '@/store/constants/ui/ageGate'

export default {
  name: 'dialog--age-gate',

  computed: {
    ...mapState({
      ageGateState: state => state.ageGate.ageGateState
    }),

    /* showAgeGate: {
      get () {
        return this.ageGate
      },
      set (val) {
        this.setAgeGateState(val)
      }
    } */
  },

  methods: {
    ...mapActions({
      setAgeGateState: VUEX_DIALOG_AGEGATE_SET_STATE
    }),

    confirmAge (value) {
      if (value) {
        this.setAgeGateState(false)
      } else {
        // Reroute user
      }
    }
  }
}
</script>
