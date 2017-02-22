'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('announcement', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
  },
  location: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  isEvent: {
    type: Sequelize.ENUM('yes', 'no'),
    allowNull: false,
  },
}, {
  classMethods: {
    findNotExpired: function() {
      let now = new Date;
      return this.findAll({where: {
        date: { $gt: now }
      }});
    }
  }
});

