const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:38026/${process.env.POSTGRES_DB}`
});

module.exports = pool;


 