module.exports = {
  plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    // 'no-semi': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 3,
    'react-native/no-color-literals': 1,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 2,
  },
}
