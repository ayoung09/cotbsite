'use strict';
const path = require('path');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/cotb_db', {logging: false});


module.exports = db;
