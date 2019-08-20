const express = require('express');
const auth = require('./auth');
const registration = require('./registration');
const confirm = require('./confirm');
const router = express.Router();

router.get('/', auth)
router.get('/reg', registration)
router.get('/confirm', confirm)

module.exports = router;
