'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('ministry', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  leader: {
    type: Sequelize.STRING,
  },
  contactEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    }
  },
  about: {
    type: Sequelize.TEXT,
  }
});
