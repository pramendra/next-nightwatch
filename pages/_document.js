// @flow
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

// $FlowFixMe
const { publicRuntimeConfig } = getConfig();
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

const GA = `
  window.dataLayer = window.dataLayer || [];
  function gtag () {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', ${publicRuntimeConfig.googleAnalytics});
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const {
      __NEXT_DATA__: { dev },
    } = this.props;

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
          {!dev && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${
                  publicRuntimeConfig.googleAnalytics
                }`}
              />

              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: GA }}
              />
            </>
          )}
        </body>
      </html>
    );
  }
}
