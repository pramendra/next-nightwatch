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
  yarn add -D eslint-plugin-flowtype flow-bin babel-preset-flow babel-plugin-transform-flow-strip-types
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
  "presets": ["next/babel"],
  "plugins": ["transform-flow-strip-types"]
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

### setup next/express server

```
yarn add body-parser dotenv express
```

#### create server/main.js

```
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
```

#### update package.json

```
+  "main": "server/main.js",
   "scripts": {
-    "dev": "next",
+    "dev": "node server/main.js",
     "build": "next build",
-    "start": "next start",
+    "start": "NODE_ENV=production node server/main.js",
```

### add server-worker

```
yarn add next-offline
```

#### updated next.config.js

```
const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

```

#### upddate server/main.js

```
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
require('dotenv').config();
const { join } = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ServiceWorker = _app => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js');
  _app.serveStatic(req, res, filePath);
};

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/service-worker.js', ServiceWorker(app));
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

```

#### update \_document.js

```
// @flow
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <style
            dangerouslySetInnerHTML={{
              __html: `* { box-sizing: border-box !important; } html { font-size: 10px } body { font-size: 1.6rem; margin: 0; }`,
            }}
          />
        </Head>
        <body>
          <noscript>
            Please enable Javascript to continue using this application.
          </noscript>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: clientSideJS }}
          />
        </body>
      </html>
    );
  }
}

const clientSideJS = `
  document.addEventListener('DOMContentLoaded', event => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered: ', registration)
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  })
`;
```
