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
  Staff.findById(req.params.staffId)
  .then(staffMember => staffMember.update(req.body))
  .then(updatedStaff => res.status(201).json(updatedStaff))
  .catch(next);
});


router.delete('/:staffId', (req, res, next) => {
  Staff.findById(req.params.staffId)
  .then(staffMember => staffMember.destroy())
  .then(() => res.status(204).end())
  .catch(next);
});


module.exports = router;
