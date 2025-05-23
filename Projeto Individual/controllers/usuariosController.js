const usuariosModel = require('../models/usuariosModel');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosModel.findAll();
    res.render('usuarios/index', { usuarios });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.criarUsuario = async (req, res) => {
  const {
    academico,
    email_academico,
    senha_academico,
    estudante,
    email_estudante,
    senha_estudante,
  } = req.body;

  try {
    await usuariosModel.create(
      academico === 'on',
      email_academico,
      senha_academico,
      estudante === 'on',
      email_estudante,
      senha_estudante
    );
    res.redirect('/usuarios');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};