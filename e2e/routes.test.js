const baseURL = 'http://localhost:3000';
const routes = [{ name: 'home', path: '/' }, { name: 'category', path: 'category' }];
function getEnvName() {
  const idx = process.argv.findIndex(arg => arg === '-e' || arg === '--env');
  return idx > -1 ? process.argv[idx + 1] : undefined;
}
module.exports = () => ({
  'Routes - test mobile and desktop page loads properly': (browser) => {
    const env = getEnvName();
    routes.map(({ name, path }) => {
      return browser
        .url(`${baseURL}${path}`)
        .waitForElementVisible('body')
        .saveScreenshot(`./reports/${env}-${name}-page.png`);
    });
    browser.end();
  },
});
