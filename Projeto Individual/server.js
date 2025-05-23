require('dotenv').config();

const express = require('express');
const path = require('path');
const db = require('./config/db');
const app = require('./app');
const PORT = process.env.PORT || 3001; // estava dando um problema com ocupação da porta 3000

// Middlewares
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
const routes = require('./routes/index');
app.use('/', routes);

// 404
app.use((req, res) => res.status(404).send('Página não encontrada'));

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
});

db.connect()
  .then(client => {
    client.release();
    console.log('Conectado ao banco de dados PostgreSQL');
  })
  .catch(err => {
    console.error('[DEBUG] db.connect() rejeitou:', err);
    process.exit(1);
  });