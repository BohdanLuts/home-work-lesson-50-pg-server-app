const { Pool } = require('pg');

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
    console.log('DB coonnection success!');
  }
});

process.on('beforeExit', () => pool.end());

// pool.query('SELECT CURRENT_DATE;', (err, data) => {
//   if (!err) {
//     console.log('data :>> ', data.rows[0])
//   }
// })

// // Отримати перелік користувачів
// pool.query('SELECT * FROM users;', (err, data) => {
//   if (!err) {
//     console.log('data :>> ', data.rows)
//   }
// })

// pool
//   .query('SELECT CURRENT_DATE;')
//   .then(data => {
//     console.log('data.rows :>> ', data.rows)
//   })
//   .catch(err => {
//     console.log('err :>> ', err)
//   })

// (async () => {
//   try {
//     const data = await pool.query('SELECT CURRENT_DATE;');
//     console.log('data.rows :>> ', data.rows);
//   } catch (err) {
//     console.log('e :>> ', err);
//   }
// })();

const id = 1;

(async () => {
  try {
    const data = await pool.query(`SELECT * FROM users WHERE id=${id};`);
    console.log('data.rows :>> ', data.rows);
  } catch (err) {
    console.log('e :>> ', err);
  }
})();

(async () => {
  try {
    const data = await pool.query('SELECT * FROM users WHERE id=$1;', [id]);
    console.log('data.rows :>> ', data.rows);
  } catch (err) {
    console.log('e :>> ', err);
  }
})();

const fn = 'Petro1';
const ln = 'Petrenko1';

(async () => {
  try {
    const data = await pool.query(
      'SELECT * FROM users WHERE first_name=$1 AND last_name=$2;',
      [fn, ln]
    );
    console.log('data.rows :>> ', data.rows);
  } catch (err) {
    console.log('e :>> ', err);
  }
})();
