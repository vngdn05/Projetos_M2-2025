const db = require('../config/db');

const loginModel = {
  async findByEmail(email) {
    // Busca pelo campo correto do banco
    const query = `SELECT * FROM usuarios WHERE email = $1 LIMIT 1`;
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  async compareSenha(senha, usuario) {
    // Comparação direta, pois só existe um campo de senha
    return senha === usuario.senha;
  }
};

module.exports = loginModel;
