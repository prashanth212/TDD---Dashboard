module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
        'app/**/*.js'
    ],

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false,

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ],
    concurrency: Infinity
  })
}
