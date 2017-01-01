// dependencies
const
  redis = require('redis'),
  bluebird = require('bluebird');

// redis client
const client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

function getThreads() {
  return client
    .lrangeAsync('threads', 0, -1)
    .then(threads => threads.map(thread => JSON.parse(thread)));
}

function createThread(thread) {
  return client.rpushAsync('threads', JSON.stringify(thread));
}

function generateId() {
  return client.incrAsync('id_counter');
}

module.exports = client;
module.exports.getThreads = getThreads;
module.exports.createThread = createThread;
module.exports.generateId = generateId;
