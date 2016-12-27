// dependencies
const server = require('koa')();
const router = require('koa-router')();
const logger = require('koa-logger');
const serve = require('koa-static');
const body = require('koa-body');

// server
server
  .use(logger())
  .use(serve('public'))
  .use(router.routes())
  .listen(3000);

// routes
router.get('/thread', function* () {
  this.body = [
    {
      title: '10chan here',
      text: 'yaya',
      image: 'df.png'
    },
    {
      title: '10chan here. again.',
      text: 'yaya x2',
      image: 'titbit.jpg'
    }
  ];
})

router.post(
  '/thread',
  body({
    multipart: true,
    formidable: { uploadDir: 'uploads/' }
  }),
  function* () {
    this.body = { ok: '10chan OK' };
  }
);
