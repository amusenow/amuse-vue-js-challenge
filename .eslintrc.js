module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
		'AMUSE_APP_IMG_SERVER_PREFIX': 'readonly',
	},
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
