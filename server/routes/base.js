'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.send('Hiya!');
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
