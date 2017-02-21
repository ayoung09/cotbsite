'use strict';

var path = require('path');
var logMiddleware = require('volleyball');

var rootPath = path.join(__dirname, '../../../');
var indexPath = path.join(rootPath, './browser/index.html');


module.exports = function (app) {
  app.setValue('projectRoot', rootPath);
  app.setValue('indexHTMLPath', indexPath);
  app.setValue('log', logMiddleware);
};
