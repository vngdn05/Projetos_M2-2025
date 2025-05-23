const db = require('../config/db');

class Aulas {
  // Listar todas as aulas
  static async getAll() {
    const result = await db.query('SELECT * FROM aulas');
    return result.rows;
  }

  // Buscar aula por ID
  static async getById(id) {
    const result = await db.query('SELECT * FROM aulas WHERE id = $1', [id]);
    return result.rows[0];
  }

  // Criar uma nova aula
  static async create(data) {
    const result = await db.query(
      'INSERT INTO aulas (professor_id, disciplina, data_aula, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.professor_id, data.disciplina, data.data_aula, data.descricao]
    );
    return result.rows[0];
  }

  // Atualizar uma aula
  static async update(id, data) {
    const result = await db.query(
      'UPDATE aulas SET professor_id = $1, disciplina = $2, data_aula = $3, descricao = $4 WHERE id = $5 RETURNING *',
      [data.professor_id, data.disciplina, data.data_aula, data.descricao, id]
    );
    return result.rows[0];
  }

  // Deletar uma aula
  static async delete(id) {
    const result = await db.query('DELETE FROM aulas WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Aulas;