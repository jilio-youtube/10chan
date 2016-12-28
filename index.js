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
  .use(serve('uploads'))
  .use(router.routes())
  .listen(3000);

// db
let threads = [];

// routes
router.get('/thread', function* () {
  this.body = threads;
})

router.post(
  '/thread',
  body({
    multipart: true,
    formidable: { uploadDir: 'uploads/' }
  }),
  function* () {
    const text = this.request.body.fields.text;
    const image = this.request.body.files.image.path.replace('uploads', '');
    threads.push({text, image})
    this.body = { ok: '10chan OK' };
  }
);
