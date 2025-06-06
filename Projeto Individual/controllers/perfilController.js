const perfilModel = require('../models/perfilModel');

const perfilController = {
  async mostrarPerfil(req, res) {
    try {
      // Exemplo: obtenha o id e tipo do usuário da sessão ou query
      // Aqui está fixo para demonstração, ajuste conforme sua autenticação
      const userId = req.query.id || 1; // Substitua por req.session.userId se usar sessão
      const tipo = req.query.tipo || 'academico'; // 'estudante' ou 'academico'

      const perfil = await perfilModel.getPerfilById(userId, tipo);

      if (!perfil) {
        return res.status(404).send('Perfil não encontrado');
      }

      // Passe os dados do perfil para a view
      res.render('layout/perfil', { perfil, tipo });
    } catch (error) {
      res.status(500).send('Erro ao carregar perfil');
    }
  }
};

module.exports = perfilController;
