import Vue from 'vue'

import constants from '@/store/constants/constants.js'

import {
	VUEX_CONSTANTS_INIT
} from '@/store/constants/constants'

const state = {}

const getters = {}

const actions = {
	[VUEX_CONSTANTS_INIT]: async ({ commit }) => {
		commit(VUEX_CONSTANTS_INIT, constants)
	}
}

const mutations = {
	[VUEX_CONSTANTS_INIT]: (state, payload) => {
		Object.keys(payload).forEach(function (constant) {
			Vue.set(state, constant, payload[constant])

			/* jslint browser: true */
			window[constant] = payload[constant]
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
