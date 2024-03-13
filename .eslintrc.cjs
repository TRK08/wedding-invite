/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', {objects: 'always',}],
    quotes: ['error', 'single'],
    'vue/max-len': ['error', {
      'code': 120,
      'template': 9000,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
}
