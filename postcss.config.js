/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-custom-properties'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
