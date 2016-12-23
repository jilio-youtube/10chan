const koa = require('koa');
const logger = require('koa-logger');
const app = koa();

app.use(logger());

app.use(function *(){
  this.body = '<b>10chan</b><br\>Добро пожаловать. Снова!';
});

app.listen(3000);
