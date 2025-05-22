// controllers/TarefaController.js
const pool = require('../config/db');

// Listar todas as tarefas
exports.listarUsuarios = async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

