const db = require('../config/db');

class Trabalhos {
  static async getAll() {
    const result = await db.query('SELECT * FROM trabalhos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM trabalhos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO trabalhos 
      (estudante_id, disciplina_id, titulo, descricao, data_entrega, arquivo_url) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        data.estudante_id,
        data.disciplina_id,
        data.titulo,
        data.descricao,
        data.data_entrega,
        data.arquivo_url
      ]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE trabalhos SET 
      estudante_id = $1,
      disciplina_id = $2,
      titulo = $3,
      descricao = $4,
      data_entrega = $5,
      arquivo_url = $6
      WHERE id = $7 RETURNING *`,
      [
        data.estudante_id,
        data.disciplina_id,
        data.titulo,
        data.descricao,
        data.data_entrega,
        data.arquivo_url,
        id
      ]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM trabalhos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }

  static async getByEstudanteId(estudante_id) {
    const result = await db.query('SELECT * FROM trabalhos WHERE estudante_id = $1', [estudante_id]);
    return result.rows;
  }

  static async getByDisciplinaId(disciplina_id) {
    const result = await db.query('SELECT * FROM trabalhos WHERE disciplina_id = $1', [disciplina_id]);
    return result.rows;
  }
}

// Exporta a classe Trabalhos, não o controller
module.exports = Trabalhos;