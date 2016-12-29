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

// redis
const Redis = require('redis');
const bluebird = require('bluebird');
const redis = Redis.createClient();
bluebird.promisifyAll(Redis.RedisClient.prototype);
bluebird.promisifyAll(Redis.Multi.prototype);

// routes
router.get('/thread', function* () {
  this.body = yield redis.lrangeAsync('threads', 0, -1);
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

    yield redis.rpushAsync('threads', JSON.stringify({text, image}));
    const threads = yield redis.lrangeAsync('threads', 0, -1);

    this.body = { threads: threads.map(thread => JSON.parse(thread)) };
  }
);
