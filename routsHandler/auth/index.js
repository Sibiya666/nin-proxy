const express = require('express');
const auth = require('./auth');
const registration = require('./registration');
const confirm = require('./confirm');
const router = express.Router();

router.get('/auth', auth)
router.post('/reg', registration)
router.post('/confirm', confirm)

module.exports = router;
