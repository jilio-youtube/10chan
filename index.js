// dependencies
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const router = require('koa-router')();

// server
const server = koa();

server
  .use(logger())
  .use(serve('public'))
  .use(router.routes())
  .listen(3000);

// routes
router.get('/thread', function* () {
  this.body = [
    {
      label: '10chan here',
      text: 'yaya'
    },
    {
      label: '10chan here. again.',
      text: 'yaya x2'
    }
  ];
})
