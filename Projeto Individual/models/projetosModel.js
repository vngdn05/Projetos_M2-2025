const db = require('../config/db');

class Projetos {
  static async getAll() {
    const result = await db.query('SELECT * FROM projetos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM projetos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO projetos (professor_id, titulo, descricao, data_inicio, data_termino) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [data.professor_id, data.titulo, data.descricao, data.data_inicio, data.data_termino]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE projetos SET professor_id = $1, titulo = $2, descricao = $3, data_inicio = $4, data_termino = $5 WHERE id = $6 RETURNING *',
      [data.professor_id, data.titulo, data.descricao, data.data_inicio, data.data_termino, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM projetos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Projetos;