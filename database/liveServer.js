// db.js
const knex = require('knex');
const config = require('../knexfileLive');

const livedb = knex(config);

module.exports = livedb;