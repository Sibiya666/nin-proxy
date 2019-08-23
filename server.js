const express = require('express');
const server = express();

const geo = require('./routs/geo');
const auth = require('./routs/auth');
const salons = require('./routs/salons');
const category = require('./routs/category');
const services = require('./routs/services');
const price = require('./routs/price');
const date = require('./routs/date');
const time = require('./routs/time');
const order = require('./routs/order');

server.use(express.json());
server.use('/auth', auth);

server.post('/geo', geo);
server.post('/salons', salons);
server.post('/category', category);
server.post('/services', services);
server.post('/price', price);
server.post('/date', date);
server.post('/time', time);
server.post('/order', order);

server.listen(3000, () => {})

