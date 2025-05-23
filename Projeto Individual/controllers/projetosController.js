const Projetos = require('../models/projetosModel'); // Importa o modelo de projetos

const projetosController = {
  async listarTodos(req, res) {
    try {
      const projetos = await Projetos.getAll();
      res.json(projetos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar projetos' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const projeto = await Projetos.getById(id);
      
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      
      res.json(projeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar projeto' });
    }
  },

  async criar(req, res) {
    try {
      const novoProjeto = await Projetos.create(req.body);
      res.status(201).json(novoProjeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar projeto' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const projetoAtualizado = await Projetos.update(id, req.body);
      
      if (!projetoAtualizado) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      
      res.json(projetoAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar projeto' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Projetos.delete(id);
      
      if (!deletado) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar projeto' });
    }
  }
};

module.exports = projetosController;