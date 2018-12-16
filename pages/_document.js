// @flow
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

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
