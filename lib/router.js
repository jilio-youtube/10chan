// dependencies
const
  router = require('koa-router')(),
  body = require('koa-body'),
  db = require('./redis');

// routes
router.get('/thread', function* () {
  this.body = yield db.getThreads();
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
    yield db.createThread({ text, image });

    const threads = yield db.getThreads();
    this.body = { threads: threads.map(thread => JSON.parse(thread)) };
  }
);

module.exports = router.routes();
