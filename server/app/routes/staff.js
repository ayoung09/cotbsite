'use strict';

const router = require('express').Router();
const { Staff } = require ('../../db/models');

router.get('/', (req, res, next) => {
  Staff.findAll({where: { id: req.churchId }})
  .then(staff => {
    res.json(staff);
  })
  .catch(next);
});


router.post('/', (req, res, next) => {
  Staff.create(req.body)
  .then(createdStaff => {
    res.status(201).json(createdStaff);
  })
  .catch(next);
});


router.put('/:staffId', (req, res, next) => {

});


router.delete('/', (req, res, next) => {

});


module.exports = router;
