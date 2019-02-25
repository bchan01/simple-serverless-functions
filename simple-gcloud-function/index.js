'use strict';
const moment = require('moment');

exports.http = (request, response) => {
  const time = moment().format('YYYYMMDD HH:mm:ss');
  response.status(200).send('Hello World, current time is ' + time);
};

exports.event = (event, callback) => {
  callback();
};
