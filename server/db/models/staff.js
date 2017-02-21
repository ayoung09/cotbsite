'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('staff', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
  }
});
