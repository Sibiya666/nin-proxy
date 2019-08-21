const express = require('express');
const server = express();

const geoHandler = require('./routsHandler/geo/geo');
const authHandler = require('./routsHandler/auth/index');
const salonsHandler = require('./routsHandler/salons/index');
const categoryHandler = require('./routsHandler/category/index');
const servicesHandler = require('./routsHandler/services/index');
const priceHandler = require('./routsHandler/price/index');
const dateHandler = require('./routsHandler/date/index');

server.use(express.json());
server.use('/auth', authHandler);

server.post('/geo', geoHandler);
server.post('/salons', salonsHandler);
server.post('/category', categoryHandler);
server.post('/services', servicesHandler);
server.post('/price', priceHandler);
server.post('/date', dateHandler);

server.listen(3000, () => {})

