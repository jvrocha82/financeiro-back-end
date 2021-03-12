const express = require('express');
const server = express();
server.use(express.json());

const accountRoutes = require('./routes/account-route');
server.use('/account',accountRoutes);

server.listen(3000, () => {
    console.log('api online')
})