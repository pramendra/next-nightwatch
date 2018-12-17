export default {
  require: [
    '@babel/polyfill',
    '@babel/register',
    'raf/polyfill',
    './setup-browser-env.js',
  ],
  files: ['!**/node_modules/**', './tests/**/*.test.js'],
  cache: true,
  failFast: true,
  failWithoutAssertions: true,
  powerAssert: false,
  concurrency: 6,
  babel: {
    testOptions: {
      babelrc: false,
      presets: ['@babel/preset-react'],
    },
  },
};
