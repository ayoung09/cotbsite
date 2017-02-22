'use strict';

const Promise = require('bluebird');
const db = require('./server/db/db')
const { Church, Vision, Value } = require('./server/db/models');


const churchProm = Church.bulkCreate([
  {name: 'Downtown', location: '935 N. Dearborn St. Chicago, IL 60610', time: 'Sundays 4:00pm', city: 'Chicago'},
  {name: 'Near West', location: '1443 W. Roosevelt Rd. Chicago, IL 60607', time: 'Saturdays 4:00pm', city: 'Chicago'},
  {name: 'Albany Park', location: '4516 N. Kedzie Ave. Chicago, IL 60625', time: 'Sundays 4:30pm', city: 'Chicago'},
  {name: 'International', location: 'The Student Life Center at East-West University: 829 S. Wabash Ave. Chicago, IL 60605', time: 'Saturdays 4:30pm', city: 'Chicago'},
  {name: 'Renton', location: 'Kennydale Elementary School: 1700 NE 28th St. Renton, Washington 98056', time: 'Sundays 11:00am', city: 'Seattle'},
  {name: 'Centreville', location: 'Centre Ridge Elementary School: 14400 New Braddock Rd. Centreville, VA 20121', time: 'Sundays 11:00am', city: 'Washington D.C.'},
  ]);

const visionProm = Vision.create({
  mission: 'We exist to see the Gospel transform people into Spirit-filled disciples, who know they are the beloved of God, because of Christ alone.',
});

const valueProm = Value.bulkCreate([
  {title: 'Gospel Centered'},
  {title: 'Dependent Prayer'},
  {title: 'Passionate Worship'},
  {title: 'Missional'},
  {title: 'Relational'},
  ]);


db.sync({force: true})
.then(() => {
  console.log('Dropped old data, now inserting data');
  return Promise.all([churchProm, visionProm, valueProm]);
})
.then((resolvedData) => {
  console.log('THIS IS RESOLVED: ', resolvedData);
  console.log('Finished inserting data (press ctrl-c to exit)');
})
.catch(err => {
  console.error('There was a problem seeding the database', err, err.stack);
});
