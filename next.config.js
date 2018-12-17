const withOffline = require('next-offline');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

module.exports = withOffline({
  publicRuntimeConfig: {
    googleAnalytics: isDev ? '' : process.env.GOOGLE_ANALYTICS,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    BASE_API_URL: 'https://api.github.com',
  },
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
  webpack(config) {
    // css loader
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'babel-loader',
        'raw-loader',
        { loader: 'postcss-loader', options: { path: './postcss.config.js' } },
      ],
    });
    return config;
  },
});
