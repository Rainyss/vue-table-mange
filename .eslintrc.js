module.exports = {
  root: true,
  env: {
    node: true
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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ["error", "always"],
    "prefer-const": "off",
    "no-multiple-empty-lines": "off",
    "no-unused-vars": "off",
    "prefer-promise-reject-errors": "off",
    "dot-notation": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
    "quotes": "off",
    "no-useless-escap": "off",
    "no-useless-escape": "off",
    "import/first": "off",
    "no-prototype-builtins": "off",
    "vue/no-unused-components": "off",
    "eqeqeq": "off"
  }
}
