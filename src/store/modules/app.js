import {
  VUEX_APP_INIT,
  VUEX_APP_AGEGATE_SET
} from '@/store/constants/app'

import {
	VUEX_CONSTANTS_INIT
} from '@/store/constants/constants'

const state = {
  ageGate: null
}

const getters = {}

const actions = {
  [VUEX_APP_INIT]: async ({ dispatch }) => {
    /*
    * Amuse - I use this action to handle any pre-render intialization of
    * global state props.
    */
    dispatch(VUEX_CONSTANTS_INIT)
  },

  [VUEX_APP_AGEGATE_SET]: ({ commit }, payload) => {
    /*
    * Amuse - I rarely, if ever, commit state mutations directly. Even if
    * no other actions are need to be dispatched, or data modified. This allows me
    * to have scaffolding in place in case any action composition is needed later on.
    * Also, the flow of [actions -> mutations -> state] is always the same.
    *
    */
    commit(VUEX_APP_AGEGATE_SET, payload)
  }
}

const mutaitons = {
  [VUEX_APP_AGEGATE_SET]: (state, payload) => {
    state.ageGate = payload || null

  }
}

export default {
  state,
  getters,
  actions,
  mutaitons
}
