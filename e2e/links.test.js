const baseURL = 'http://localhost:3000';

 module.exports = () => ({
  'Links - test links are properly working': browser => {
    browser.url(baseURL)
      .waitForElementVisible("body")
      .click("#category-link")
      .waitForElementVisible("#home-link")
      .click("#home-link")
      .waitForElementVisible('#category-link');

     browser.end();
  },
});