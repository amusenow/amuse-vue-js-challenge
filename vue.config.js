module.exports = {
  lintOnSave: false,

  runtimeCompiler: process.env.USE_RUNTIME_COMPILER,

  transpileDependencies: [
    'vuetify'
  ],

  configureWebpack: {
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 30000,
				cacheGroups: {
					vendors: {
						reuseExistingChunk: true,
						test: /[\\/]node_modules[\\/]/,
						name (module) {
							const name = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
							const packageName = (name !== null) ? name[1] : ''
							return `npm.${packageName.replace('@', '')}`
						}
					}
				}
			}
		}
	},

  /* css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/injected-styles.scss";',
        implementation: require('sass')
      },
      sass: {
        prependData: '@import "~@/styles/sass/index.scss"'
      }
    }
  }, */

  chainWebpack: config => {
    config.plugins.delete('prefetch')

    config.module
      .rule('css')
      .oneOf('module')
      .resourceQuery(/module/)
      .use('css-loader')
      .loader('css-loader')
      .options({
        sourceMap: false,
        importLoaders: 2,
        modules: true,
        localIdentName: '[name]-[hash]'
      })
  }
}
