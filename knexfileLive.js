// knexfile.js
require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    host: 'sql.freedb.tech',
    user: 'freedb_liveroot',
    password: 'dn%&s6fN8*V#K4m',
    database: 'freedb_kodukku_test_project',
    charset: 'utf8',
    port: 3306
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
