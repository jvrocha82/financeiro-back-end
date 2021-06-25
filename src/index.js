const express = require('express');
const server = express();
const cors = require('cors')

require('dotenv').config()
server.use(express.json());
server.use(cors()) 
var helmet = require("helmet")
const accountRoutes = require('./routes/routes');
server.use('/', accountRoutes);




server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });


server.listen(process.env.PORT || 3001, () => {
    console.log('api online')
})