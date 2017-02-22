'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('church', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
