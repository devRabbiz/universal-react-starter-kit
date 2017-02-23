export default {
  // The host on which the HTTP server should run.
  host: process.env.HOST || 'localhost',

  // The port on which the HTTP server should run.
  port: process.env.PORT || 3000,

  // The host on which the API server should run.
  apiHost: process.env.APIHOST || 'localhost',

  // The port on which the API server should run.
  apiPort: process.env.APIPORT,

  paths: {
    // Path to API mock server
    api: 'api',

    // Path to the public assets that will be served off the root of the
    // HTTP server.
    dist: 'dist',

    // Path to access logs
    logs: 'logs',

    // Path to tmp
    tmp: '.tmp',
  },

  globals: {
    // DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
    __DISABLE_SSR__: false,
    __DEVELOPMENT__: process.env.NODE_ENV !== 'production',
  },

  proxies: {
    '^/api/(.*)': 'http://touch.qunar.com/api/$1'
  }
};