const { Pool } = require('pg');
require('dotenv').config();

// Verificação das variáveis de ambiente
if (
  !process.env.DB_HOST ||
  !process.env.DB_PORT ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_DATABASE
) {
  console.error('Alguma variável de ambiente do banco de dados não está definida.');
  console.error('DB_HOST:', process.env.DB_HOST);
  console.error('DB_PORT:', process.env.DB_PORT);
  console.error('DB_USER:', process.env.DB_USER);
  console.error('DB_PASSWORD:', process.env.DB_PASSWORD ? '***' : undefined);
  console.error('DB_DATABASE:', process.env.DB_DATABASE);
  process.exit(1);
}

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
