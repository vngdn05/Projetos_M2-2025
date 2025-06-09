const Pesquisas = require('../models/pesquisasModel');

const pesquisasController = {
  async listarTodos(req, res) {
    try {
      const pesquisas = await Pesquisas.getAll();
      // Renderiza a view e passa as pesquisas
      res.render('layout/pesquisas', { pesquisas });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar pesquisas' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const pesquisa = await Pesquisas.getById(id);
      
      if (!pesquisa) {
        return res.status(404).json({ error: 'Pesquisa não encontrada' });
      }
      
      res.json(pesquisa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pesquisa' });
    }
  },

  async criar(req, res) {
    try {
      // Adiciona a data atual se não for fornecida
      if (!req.body.data_criacao) {
        req.body.data_criacao = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
      }
      
      const novaPesquisa = await Pesquisas.create(req.body);
      res.status(201).json(novaPesquisa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pesquisa', details: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const pesquisaAtualizada = await Pesquisas.update(id, req.body);
      
      if (!pesquisaAtualizada) {
        return res.status(404).json({ error: 'Pesquisa não encontrada' });
      }
      
      res.json(pesquisaAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar pesquisa' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Pesquisas.delete(id);
      
      if (!deletado) {
        return res.status(404).json({ error: 'Pesquisa não encontrada' });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar pesquisa' });
    }
  },

  async listarPorEstudante(req, res) {
    try {
      const { estudante_id } = req.params;
      const pesquisas = await Pesquisas.getByEstudanteId(estudante_id);
      res.json(pesquisas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pesquisas do estudante' });
    }
  }
};

module.exports = pesquisasController;