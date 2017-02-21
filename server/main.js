'use strict';

var chalk = require('chalk');

var startDb = require('./db');

var server = require('http').createServer();

var createApplication = function () {
  var app = require('./app');
  server.on('request', app);
};

var startServer = function () {
  var PORT = 1337;

  server.listen(PORT, function() {
    console.log(chalk.blue('Server is listening on port', chalk.magenta(PORT)));
  });
};

startDb
.then(createApplication)
.then(startServer)
.catch(err => {
  console.error(chalk.red(err.stack));
  process.exit(1);
});
