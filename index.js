// dependecies
const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');

// server
const server = koa();

server
  .use(logger())
  .use(serve('uploads'))
  .use(function *(){
    this.body = '<b>10chan</b><br\>Добро пожаловать. Снова!';
  })
  .listen(3000);
