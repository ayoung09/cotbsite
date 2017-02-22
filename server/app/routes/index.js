'use strict';

const router = require('express').Router();
const Promise = require('bluebird');
const { Church, Vision, Value } = require('../../db/models');


router.get('/', (req, res, next) => {
  Promise.all([
    Church.findAll(),
    Vision.findAll(),
    Value.findAll()])
  .then((response) => {
    console.log('THESE ARE ON GET /: ', response);
    res.json(response);
  })
  .catch(next);
});


router.param('churchId', (req, res, next, id) => {
  Church.findById(id)
  .then(church => {
    if (!church) {
      const err = Error('Church branch not found');
      err.status = 404;
      throw err;
    }
    req.church = church;
    next();
    return null;
  })
  .catch(next);
});

router.get('/:churchId', (req, res) => {
  res.json(req.church);
});



router.use('/:churchId/staff', require('./staff'));

router.use('/:churchId/ministries', require('./ministries'));

router.use('/:churchId/announcements', require('./announcements'));

router.use('/:churchId/sermons', require('./sermons'));

router.use('/:churchId/giving', require('./giving'));



router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
