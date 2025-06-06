const db = require('../config/db');

const perfilModel = {
  async getPerfilById(id, tipo) {
    if (tipo === 'estudante') {
      const result = await db.query('SELECT * FROM estudantes WHERE id = $1', [id]);
      return result.rows[0];
    } else if (tipo === 'academico') {
      const result = await db.query('SELECT * FROM academicos WHERE id = $1', [id]);
      return result.rows[0];
    }
    return null;
  }
};

module.exports = perfilModel;
