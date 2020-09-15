module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    indent: 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    semi: [1, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
