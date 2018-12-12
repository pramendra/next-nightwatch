const chromedriver = require('chromedriver');
const seleniumServer = require('selenium-server');
const os = require('os');

const browserSize = 'window-size=360,640';

module.exports = {
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },

  test_settings: {
    end_session_on_fail: false,
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,

        chromeOptions: {
          args: os.platform() === 'linux' ? ['headless', 'no-sandbox', browserSize] : [browserSize],
        },
      },
      globals: {
        waitForConditionTimeout: 500,
      },
    },
    mobile: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          mobileEmulation: {
            deviceMetrics: { width: 360, height: 640, pixelRatio: 3 },
            userAgent:
              'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Mobile Safari/537.36 profi-autotest',
          },
        },
      },
    },
  },
};
