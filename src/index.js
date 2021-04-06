const express = require('express');
const server = express();
require('dotenv').config()
server.use(express.json());

const accountRoutes = require('./routes/routes');
server.use('/', accountRoutes);

server.listen(3000, () => {
    console.log('api online')
})