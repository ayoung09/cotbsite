'use strict';

const router = require('express').Router();
const { Announcement } = require('../../db/models');


router.get('/', (req, res, next) => {
  Announcement.findNotExpired()
  .then(announcements => res.json(announcements))
  .catch(next);
});


router.post('/', (req, res, next) => {
  Announcement.create(req.body)
  .then(createdAnnouncement => {
    res.status(201).json(createdAnnouncement);
  })
  .catch(next);
});


router.put('/:announcementId', (req, res, next) => {
  Announcement.findById(req.params.announcementId)
  .then(announcement => announcement.update(req.body))
  .then(updatedAnnouncement => res.status(201).json(updatedAnnouncement))
  .catch(next);
});


router.delete('/:announcementId', (req, res, next) => {
  Announcement.findById(req.params.announcementId)
  .then(announcement => announcement.destroy())
  .then(() => res.status(204).end())
  .catch(next);
});


module.exports = router;
