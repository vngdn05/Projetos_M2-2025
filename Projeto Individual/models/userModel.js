const db = require('../config/db');

class usuarios {
  static async getAll() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  }
}

module.exports = usuarios;
