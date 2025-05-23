const TrabalhosModel = require('../models/trabalhosModel'); // Renomeei a importação para evitar conflito

const trabalhosController = {  // Mudei o nome do objeto para trabalhosController
  async listarTodos(req, res) {
    try {
      const trabalhos = await TrabalhosModel.getAll();
      res.json(trabalhos);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao listar trabalhos',
        details: error.message 
      });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const trabalho = await TrabalhosModel.getById(id);
      
      if (!trabalho) {
        return res.status(404).json({ error: 'Trabalho não encontrado' });
      }
      
      res.json(trabalho);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao buscar trabalho',
        details: error.message 
      });
    }
  },

  async criar(req, res) {
    try {
      if (!req.body.titulo || !req.body.estudante_id || !req.body.disciplina_id) {
        return res.status(400).json({ 
          error: 'Título, ID do estudante e ID da disciplina são obrigatórios' 
        });
      }

      const novoTrabalho = await TrabalhosModel.create(req.body);
      res.status(201).json(novoTrabalho);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao criar trabalho',
        details: error.message 
      });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const trabalhoAtualizado = await TrabalhosModel.update(id, req.body);
      
      if (!trabalhoAtualizado) {
        return res.status(404).json({ error: 'Trabalho não encontrado' });
      }
      
      res.json(trabalhoAtualizado);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao atualizar trabalho',
        details: error.message 
      });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const deletado = await TrabalhosModel.delete(id);
      
      if (!deletado) {
        return res.status(404).json({ error: 'Trabalho não encontrado' });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao deletar trabalho',
        details: error.message 
      });
    }
  },

  async listarPorEstudante(req, res) {
    try {
      const { estudante_id } = req.params;
      const trabalhos = await TrabalhosModel.getByEstudanteId(estudante_id);
      res.json(trabalhos);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao buscar trabalhos do estudante',
        details: error.message 
      });
    }
  },

  async listarPorDisciplina(req, res) {
    try {
      const { disciplina_id } = req.params;
      const trabalhos = await TrabalhosModel.getByDisciplinaId(disciplina_id);
      res.json(trabalhos);
    } catch (error) {
      res.status(500).json({ 
        error: 'Erro ao buscar trabalhos da disciplina',
        details: error.message 
      });
    }
  }
};

module.exports = trabalhosController; // Exporta o objeto do controller