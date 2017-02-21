'use strict';

const Church = require('./church');
const Staff = require('./staff');
const Ministry = require('./ministry');
const Announcement = require('./announcement');
const Vision = require('./vision');
const Value = require('./value');


Staff.belongsTo(Church);
Ministry.belongsTo(Church);
Announcement.belongsTo(Church);


module.exports = {
  Church: Church,
  Staff: Staff,
  Ministry: Ministry,
  Announcement: Announcement,
  Vision: Vision,
  Value: Value,
};
