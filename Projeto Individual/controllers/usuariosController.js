const usuariosModel = require('../models/usuariosModel');

const usuariosController = {
  // Renderiza a página de escolha de tipo de usuário
  escolherTipo(req, res) {
    res.render('usuarios/escolherTipo'); // Crie uma view chamada escolherTipo.ejs/pug/etc
  },

  // Cria um novo usuário com base na escolha (acadêmico ou estudante)
  async criarUsuario(req, res) {
    try {
      const tipo = req.body.tipo; // 'academico' ou 'estudante'
      if (tipo !== 'academico' && tipo !== 'estudante') {
        return res.render('usuarios/escolherTipo', {
          error: 'Selecione uma opção válida.'
        });
      }

      await usuariosModel.create({ tipo }); // Ajuste o model para aceitar um objeto com 'tipo'
      res.redirect('/usuarios');
    } catch (error) {
      res.render('usuarios/escolherTipo', { error: 'Erro ao criar usuário: ' + error.message});
    }
  },

  // Lista todos os usuários
  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuariosModel.findAll();
      res.render('usuarios/index', { usuarios });
    } catch (error) {
      res.status(500).send('Erro ao listar usuários: ' + error.message);
    }
  }
};

module.exports = usuariosController;

