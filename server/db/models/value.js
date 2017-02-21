'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('value', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
  },
});
