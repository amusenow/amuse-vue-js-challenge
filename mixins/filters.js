export const filtersMixin = {
  methods: {
    unique(value, index, self) {
      return self.indexOf(value) === index
    },
  },
}
