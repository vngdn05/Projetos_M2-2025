const usuariosModel = require('../models/usuariosModel');
const usuariosController = {
  // Lista todos os usuários e renderiza a view
  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuariosModel.findAll();
      
      res.render('usuarios/index', { usuarios });
    } catch (error) {
      res.status(500).send('Erro ao listar usuários: ' + error.message);
    }
  },

  // Cria um novo usuário e redireciona para a lista
  async criarUsuario(req, res) {
    try {
      // Checkbox retorna 'on' se marcado, undefined se não
      const academico = req.body.academico ? true : false;
      const estudante = req.body.estudante ? true : false;
      const email_academico = req.body.email_academico || null;
      const senha_academico = req.body.senha_academico || null;
      const email_estudante = req.body.email_estudante || null;
      const senha_estudante = req.body.senha_estudante || null;

      await usuariosModel.create(
        academico,
        email_academico,
        senha_academico,
        estudante,
        email_estudante,
        senha_estudante
      );
      res.redirect('/usuarios');
    } catch (error) {
      res.status(500).send('Erro ao criar usuário: ' + error.message);
    }
  },
}



module.exports = usuariosController;

