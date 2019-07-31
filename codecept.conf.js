exports.config = {
  tests: 'codeceptjs/*.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'headquarters'
}
