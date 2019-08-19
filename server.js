const express = require('express');
const server = express();
const geoHandler = require('./routsHandler/geo/geo');
const authHandler = require('./routsHandler/auth/index');

server.get('/auth', authHandler);
server.get('/geo', geoHandler);

server.listen(3000, () => {})

