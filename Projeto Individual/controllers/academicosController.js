const Academicos = require('../models/academicosModel'); // Importa o modelo de acadêmicos

const academicosController = {
  // Listar todos os acadêmicos (professores)
  async listarTodos(req, res) {
    try {
      const academicos = await Academicos.getAll();
      res.json(academicos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar acadêmicos' });
    }
  },

  // Buscar um acadêmico por ID
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const academico = await Academicos.getById(id);
      
      if (!academico) {
        return res.status(404).json({ error: 'Acadêmico não encontrado' });
      }
      
      res.json(academico);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar acadêmico' });
    }
  },

  // Criar um novo acadêmico
  async criar(req, res) {
    try {
      const novoAcademico = await Academicos.create(req.body);
      res.status(201).json(novoAcademico);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar acadêmico' });
    }
  },

  // Atualizar um acadêmico
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const academicoAtualizado = await Academicos.update(id, req.body);
      
      if (!academicoAtualizado) {
        return res.status(404).json({ error: 'Acadêmico não encontrado' });
      }
      
      res.json(academicoAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar acadêmico' });
    }
  },

  // Remover um acadêmico (opcional, já que você mencionou que não vai usar)
  async remover(req, res) {
    try {
      const { id } = req.params;
      const deletado = await Academicos.delete(id);
      
      if (!deletado) {
        return res.status(404).json({ error: 'Acadêmico não encontrado' });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao remover acadêmico' });
    }
  }
};

module.exports = academicosController;