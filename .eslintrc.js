module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': 'off',
    'no-template-curly-in-string': 'off',
    'no-underscore-dangle': 'off',
    'dot-notation': 'off',
    'arrow-body-style': 'off',
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'prettier/prettier': ['error'],
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/space-after-type-colon': 0,
  },
  globals: {
    document: true,
    window: true,
    ga: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['types'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
