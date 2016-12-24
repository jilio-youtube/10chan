// dependencies
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');

// server
const server = koa();

server
  .use(logger())
  .use(serve('public'))
  .listen(3000);
