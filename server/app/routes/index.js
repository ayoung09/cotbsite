'use strict';

const router = require('express').Router();



router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
