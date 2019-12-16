var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqp://rjstvmia:hViRMRt2RIu1IN1FtZBXvnIDamTo-zU5@rhino.rmq.cloudamqp.com/rjstvmia';

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    console.log(err);
    console.log(conn);
   conn.createChannel(function (err, channel) {
      ch = channel;
   });
});

// Method to send to queue
const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data));
 }
 

 process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
 });

 module.exports = publishToQueue;