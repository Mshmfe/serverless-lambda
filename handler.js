'use strict';
const serverless = require('serverless-http');
const app = require('./app');

// this function genarated from lambda to run our API
module.exports.hello = serverless(app)