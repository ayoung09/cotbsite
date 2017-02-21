'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('vision', {
  mission: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  belief: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});
