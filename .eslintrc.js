module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['universe/native', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
