const Estudantes = require('../models/estudantesModel');

const estudantesController = {
  async listarTodos(req, res) {
    try {
      const estudantes = await Estudantes.getAll();
      res.json(estudantes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar estudantes' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const estudante = await Estudantes.getById(id);
      
      if (!estudante) {
        return res.status(404).json({ error: 'Estudante não encontrado' });
      }
      
      res.json(estudante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar estudante' });
    }
  },

  async criar(req, res) {
    try {
      const novoEstudante = await Estudantes.create(req.body);
      res.status(201).json(novoEstudante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar estudante' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const estudanteAtualizado = await Estudantes.update(id, req.body);
      
      if (!estudanteAtualizado) {
        return res.status(404).json({ error: 'Estudante não encontrado' });
      }
      
      res.json(estudanteAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar estudante' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Estudantes.delete(id);
      
      if (!deletado) {
        return res.status(404).json({ error: 'Estudante não encontrado' });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar estudante' });
    }
  }
};

module.exports = estudantesController