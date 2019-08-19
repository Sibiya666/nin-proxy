const express = require('express');
const server = express();
const geoHandler = require('./routsHandler/geo/geo');
const authHandler = require('./routsHandler/auth/index');

server.get('/geo', geoHandler);
server.get('/auth', authHandler);

server.listen(3000, () => {})

