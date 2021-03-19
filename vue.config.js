module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/app.scss"`
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
