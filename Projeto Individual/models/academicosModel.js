const db = require('../config/db');

class Academicos {
  static async getAll() {
    const result = await db.query('SELECT * FROM academicos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM academicos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO academicos (name, email) VALUES ($1, $2) RETURNING *',
      [data.name, data.email]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE academicos SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [data.name, data.email, id]
    );
    return result.rows[0];
  }

  // Como você mencionou que não vai usar DELETE, mas deixei aqui caso precise
  static async delete(id) {
    const result = await db.query('DELETE FROM academicos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Academicos;