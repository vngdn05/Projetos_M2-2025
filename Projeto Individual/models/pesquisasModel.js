const db = require('../config/db');

class Pesquisas {
  static async getAll() {
    const result = await db.query('SELECT * FROM pesquisas');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM pesquisas WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO pesquisas 
      (estudante_id, titulo, descricao, data_criacao, area_conhecimento) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.estudante_id, data.titulo, data.descricao, data.data_criacao, data.area_conhecimento]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE pesquisas SET 
      estudante_id = $1, 
      titulo = $2, 
      descricao = $3, 
      data_criacao = $4, 
      area_conhecimento = $5 
      WHERE id = $6 RETURNING *`,
      [data.estudante_id, data.titulo, data.descricao, data.data_criacao, data.area_conhecimento, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM pesquisas WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }

  // Método adicional para buscar pesquisas por estudante
  static async getByEstudanteId(estudante_id) {
    const result = await db.query('SELECT * FROM pesquisas WHERE estudante_id = $1', [estudante_id]);
    return result.rows;
  }
}

module.exports = Pesquisas;