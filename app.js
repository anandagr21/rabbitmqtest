const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();




const publishToQueue = require('../rabbitmqm/services/MQService');
app.get('/msg',(req,res)=>{

res.json({"name":"anand"});
})
app.post('/msg',async(req, res, next)=>{
    let { queueName, payload } = req.body;
    await publishToQueue.publishToQueue(queueName, payload);
    res.statusCode = 200;
    res.data = {"message-sent":true};
    next();
  })





const PORT = process.env.PORT || 30006;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
