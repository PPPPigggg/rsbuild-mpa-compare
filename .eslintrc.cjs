/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue-pug/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  parser: "vue-eslint-parser",
  rules: {
    "no-async-promise-executor": "off",
  },
  overrides: [
    {
      files: ["src/**/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
    {
      files: ["index.html"],
      rules: {
        "vue/comment-directive": "off",
      },
    },
  ],
  // rules: {
  //   'no-warning-comments': [
  //     'error',
  //     { terms: ['TODO', 'FIXME'], location: 'anywhere' },
  //   ],
  // },
}
