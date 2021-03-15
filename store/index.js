export const state = () => ({
  ageConfirmed: undefined
})

export const mutations = {
  confirmAge (state, value) {
    state.ageConfirmed = value
  }
}
