exports.config = {
  tests: 'codeceptjs/*.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true,
      waitForAction: 500,
      waitForTimeout: 5000,
      waitForNavigation: ['networkidle0', 'domcontentloaded'],
      fullPageScreenshots: true
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'headquarters'
}
