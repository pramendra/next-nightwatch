# Integration testing using nightwatch (Selenium) on next.js (react)

[![CircleCI](https://circleci.com/gh/pramendra/next-nightwatch.svg?style=svg)](https://circleci.com/gh/pramendra/next-nightwatch)

## Setup

```
$ git clone https://github.com/pramendra/next-nightwatch
$ cd next-nightwatch
$ yarn
```

## how to run test

```
$ yarn dev // run app on http://localhost:3000
$ yarn test:e2e // runs nightwatch test
```

check screenshot `$ cd reports`

## setup linting

### find and install dependencies of `eslint-config-airbnb`

`npm info "eslint-config-airbnb@latest" peerDependencies --json`

### output

```
{
  "eslint": "^4.19.1 || ^5.3.0",
  "eslint-plugin-import": "^2.14.0",
  "eslint-plugin-jsx-a11y": "^6.1.1",
  "eslint-plugin-react": "^7.11.0"
}
```

### install

```
yarn add -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-airbnb
```

### add add eslint configuration in `.eslintrc.js`

```
module.exports = {
 extends: [
   'airbnb',
 ],
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
```

## setup prettier

### find and install dependencies

```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

### integrate prettier within eslint

```
   extends: [
-    'airbnb',
+    'airbnb',
+    'prettier',
+    "prettier/react"
   ],
+  plugins: ['prettier'],
   parser: 'babel-eslint',
   rules: {
     'class-methods-use-this': 'off',
@@ -17,6 +20,7 @@ module.exports = {
     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
     'react/react-in-jsx-scope': 0,
     'react/require-default-props': 0,
+    'prettier/prettier': ['error'],
   },
```

### create `.prettierrc` on route with following config

```
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all"
}
```

### update `package.json` to format code via cli

```
"format": "prettier --write '**/*.{js,jsx}'"
```

### skip prettier ignore in `.prettierignore`

### setup formatting on autosave in vs-code

add following config in `.vscode/settings.json`

```
{
  "eslint.enable": true,
  "editor.formatOnSave": true,
  "javascript.validate.enable": false,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "node_modules/": true,
    ".next/": true,
    "npm": true
  }
}
```
