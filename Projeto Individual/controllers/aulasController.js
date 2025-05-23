const Aulas = require('../models/aulasModel'); // Importa o modelo de aulas

const aulasController = {
  // Listar todas as aulas
  async listarTodas(req, res) {
    try {
      const aulas = await Aulas.getAll();
      res.json(aulas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar aulas' });
    }
  },

  // Buscar aula por ID
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const aula = await Aulas.getById(id);

      if (!aula) {
        return res.status(404).json({ error: 'Aula não encontrada' });
      }

      res.json(aula);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar aula' });
    }
  },

  // Criar nova aula
  async criar(req, res) {
    try {
      const novaAula = await Aulas.create(req.body);
      res.status(201).json(novaAula);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar aula' });
    }
  },

  // Atualizar aula
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const aulaAtualizada = await Aulas.update(id, req.body);

      if (!aulaAtualizada) {
        return res.status(404).json({ error: 'Aula não encontrada' });
      }

      res.json(aulaAtualizada);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar aula' });
    }
  },

  // Deletar aula
  async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Aulas.delete(id);

      if (!deletado) {
        return res.status(404).json({ error: 'Aula não encontrada' });
      }

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar aula' });
    }
  }
};

module.exports = aulasController;