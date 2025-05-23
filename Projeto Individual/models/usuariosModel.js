const db = require('../config/db');

module.exports = {
  async findAll() {
    const query = 'SELECT * FROM usuarios ORDER BY user_id';
    const result = await db.query(query);
    return result.rows;
  },

  async create(academico, email_academico, senha_academico, estudante, email_estudante, senha_estudante){
    const query = `INSERT INTO usuarios (
        academico, email_academico, senha_academico,
        estudante, email_estudante, senha_estudante) VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [
      academico,
      email_academico,
      senha_academico,
      estudante,
      email_estudante,
      senha_estudante,
    ];
    await db.query(query, values);
  }
};