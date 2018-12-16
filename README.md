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

### setup flow type

```
  yarn add -D eslint-plugin-flowtype flow-bin
```

#### append followng scripts

```
  "flow start": "flow start",
  "flow stop": "flow stop",
  "flow status": "flow status",
  "flow coverage": "flow coverage"

```

#### update .babelrc

```
{
  "presets": ["next/babel", "flow"]
}
```

#### add flowconfig

```
[ignore]
.*/node_modules/*

[include]

[libs]
types/

[options]
```

#### update eslint config

```
 module.exports = {
-  extends: ['airbnb', 'prettier', 'prettier/react'],
-  plugins: ['prettier'],
+  extends: [
+    'airbnb',
+    'prettier',
+    'prettier/react',
+    'plugin:flowtype/recommended',
+  ],
+  plugins: ['flowtype', 'prettier'],
   parser: 'babel-eslint',
   rules: {
     'class-methods-use-this': 'off',
@@ -17,6 +22,8 @@ module.exports = {
     'react/react-in-jsx-scope': 0,
     'react/require-default-props': 0,
     'prettier/prettier': ['error'],
+    'flowtype/boolean-style': [2, 'boolean'],
+    'flowtype/space-after-type-colon': 0,
   },

```

#### add next.js.flow

```
/* @flow */

declare module "next" {
  declare type NextApp = {
    prepare(): Promise<void>;
    getRequestHandler(): any;
    render(req: any, res: any, pathname: string, query: any): any;
    renderToHTML(req: any, res: any, pathname: string, query: string): string;
    renderError(err: Error, req: any, res: any, pathname: any, query: any): any;
    renderErrorToHTML(err: Error, req: any, res: any, pathname: string, query: any): string;
  };
  declare module.exports: (...opts: any) => NextApp
}

declare module "next/head" {
  declare module.exports: Class<React$Component<any, any>>;
}

declare module "next/link" {
  declare module.exports: Class<React$Component<{href: string, prefetch?: bool}, any>>;
}

declare module "next/error" {
  declare module.exports: Class<React$Component<{statusCode: number}, any>>;
}

declare module "next/router" {
  declare module.exports: {
    route: string;
    pathname: string;
    query: Object;
    onRouteChangeStart: ?((url: string) => void);
    onRouteChangeComplete: ?((url: string) => void);
    onRouteChangeError: ?((err: Error & {cancelled: boolean}, url: string) => void);
    push(url: string, as: ?string): Promise<boolean>;
    replace(url: string, as: ?string): Promise<boolean>;
  };
}

declare module "next/document" {
  declare export var Head: Class<React$Component<any, any>>;
  declare export var Main: Class<React$Component<any, any>>;
  declare export var NextScript: Class<React$Component<any, any>>;
  declare export default Class<React$Component<any, any>> & {
    getInitialProps: (ctx: {pathname: string, query: any, req?: any, res?: any, jsonPageRes?: any, err?: any}) => Promise<any>;
    renderPage(cb: Function): void;
  };
}
```
