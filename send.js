#!/usr/bin/env node/amqplib/callback_api

var amqp = require('./node_modules/amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
  conn.createChannel(function (err, ch) {
    var q = 'hello';
    var msg = 'Hello World!';

    ch.assertQueue(q, {
      durable: false
    });
    ch.sendToQueue(q, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
  setTimeout(function () {
    conn.close();
    process.exit(0)
  }, 500);
});