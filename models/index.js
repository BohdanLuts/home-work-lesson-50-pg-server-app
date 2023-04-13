const { Pool } = require('pg');
const User = require('./user');
const Phone = require('./phone');

const connectionConfig = {
  host: 'localhost',
  port: '5432',
  database: 'phones_sales',
  user: 'postgres',
  password: '141131',
};

const pool = new Pool(connectionConfig);

pool.connect(err => {
  if (!err) {
    console.log('DB connection success!');
  }
});

process.on('beforeExit', () => pool.end());

User.pool = pool;
Phone.pool = pool;

module.exports = { User, Phone };
