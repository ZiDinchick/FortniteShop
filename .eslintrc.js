module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb', // Airbnb Style Guide
    'plugin:react/recommended',
    'plugin:prettier/recommended', // интеграция с Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/prop-types': 'off', // если не используете prop-types
    'no-console': 'warn', // предупреждение для console.log
    'no-debugger': 'error', // запрет на debugger
    'import/prefer-default-export': 'off', // отключение правила на использование export default
    'react/react-in-jsx-scope': 'off', // для новых версий React
    'no-use-before-define': ['error', { functions: false, classes: true }], // функции могут быть вызваны до объявления
    'jsx-a11y/anchor-is-valid': 'off', // отключение строгих правил для тегов <a> в Next.js
    'consistent-return': 'off', // отключение обязательного возврата значений из функций
    'no-nested-ternary': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
