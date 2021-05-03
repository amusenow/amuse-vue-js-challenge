import {
  VUEX_DIALOG_AGEGATE_SET_STATE
} from '@/store/constants/ui/ageGate'

const state = {
  ageGateState: false
}

const getters = {}

const actions = {
  [VUEX_DIALOG_AGEGATE_SET_STATE]: ({ commit }, payload) => {
    commit(VUEX_DIALOG_AGEGATE_SET_STATE, payload)
  }
}

const mutations = {
  [VUEX_DIALOG_AGEGATE_SET_STATE]: (state, payload) => {
    state.ageGateState = payload || false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
