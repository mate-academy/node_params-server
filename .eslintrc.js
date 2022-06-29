module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
    browser: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest'],
  ecmaFeatures: {
    "modules": true,
    "spread" : true,
    "restParams" : true
  },
};
