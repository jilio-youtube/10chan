// dependencies
const
  redis = require('redis'),
  bluebird = require('bluebird');

// redis client
const client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

function getThreads() {
  return client.lrangeAsync('threads', 0, -1);
}

function createThread(thread) {
  return client.rpushAsync('threads', JSON.stringify(thread));
}

module.exports = client;
module.exports.getThreads = getThreads;
module.exports.createThread = createThread;
