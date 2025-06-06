const db = require('../config/db');

module.exports = {
  async findAll() {
    // Corrigido para userId
    const query = 'SELECT * FROM usuarios ORDER BY user_id';
    const result = await db.query(query);
    return result.rows;
  },

  async create({ tipo }) {
    // Insere apenas o campo 'tipo' na tabela usuarios
    const query = `INSERT INTO usuarios (tipo) VALUES ($1)`;
    const values = [tipo];
    await db.query(query, values);
  }
};