// dependencies
const
  server = require('koa')(),
  logger = require('koa-logger')(),
  serve = require('koa-static'),
  router = require('./lib/router');

// server
server
  .use(logger)
  .use(serve('public'))
  .use(serve('uploads'))
  .use(router)
  .listen(3000);
