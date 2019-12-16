const express = require("express");

const app = express();



const router = express.Router();
const publishToQueue = require('../rabbitmq/services/MQService');

router.post('/msg',async(req, res, next)=>{
    let { queueName, payload } = req.body;
    await publishToQueue(queueName, payload);
    res.statusCode = 200;
    res.data = {"message-sent":true};
    next();
  })





const PORT = process.env.PORT || 30006;

app.listen(PORT, console.log(`Server started on port ${PORT}`));