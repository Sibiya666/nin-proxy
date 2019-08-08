const express = require('express');
const server = express();
const geoHandler = require('./routsHandler/geo/geo');

server.get('/geo', geoHandler);

server.listen(22, () => {
    console.log('listen')
})

