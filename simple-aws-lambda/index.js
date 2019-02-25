'use strict';
const moment = require('moment');

exports.greet = (event, context, callback) => {
  const time = moment().format('YYYYMMDD HH:mm:ss');
  callback(null, 'Hello World, current time is ' + time);
};

