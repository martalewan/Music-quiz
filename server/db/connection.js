const { Pool, Client } = require('pg');
require('dotenv').config();

// import package 'pg' here and get the connection from the connection pool
// see pg docs
// https://node-postgres.com/features/connecting
// https://node-postgres.com/features/pooling

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.DB_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})

module.exports = {
  query: (sqlQuery, callback) => {
    return pool.query(sqlQuery, callback)
  },
}
