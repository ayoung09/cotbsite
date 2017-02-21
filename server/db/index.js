'use strict';
const db = require('./db');
const chalk = require('chalk');

require('./models');

var syncedDbPromise = db.sync();

syncedDbPromise.then(() => {
  console.log(chalk.green('Sequelize models synced to PostgresSQL'));
});

module.exports = syncedDbPromise;
