// routes/index.js
const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

router.get('/usuarios', UsuariosController.listarUsuarios);

module.exports = router;