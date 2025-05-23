const db = require('../config/db');

class Estudantes {
  static async getAll() {
    const result = await db.query('SELECT * FROM estudantes');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM estudantes WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO estudantes (nome, email, matricula, curso, data_nascimento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [data.nome, data.email, data.matricula, data.curso, data.data_nascimento]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE estudantes SET nome = $1, email = $2, matricula = $3, curso = $4, data_nascimento = $5 WHERE id = $6 RETURNING *',
      [data.nome, data.email, data.matricula, data.curso, data.data_nascimento, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM estudantes WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Estudantes;