var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqp://rjstvmia:hViRMRt2RIu1IN1FtZBXvnIDamTo-zU5@rhino.rmq.cloudamqp.com/rjstvmia';
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('user-messages', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Message:", msg.content.toString());
      },4000);
      },{ noAck: true }
    );
  });
});