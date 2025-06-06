const db = require('../config/db');

const loginModel = {
  async findByEmail(email) {
    // Busca por email_a ou email_e
    const query = `
      SELECT *, 
        CASE 
          WHEN email_a = $1 THEN 'academico'
          WHEN email_e = $1 THEN 'estudante'
          ELSE NULL
        END AS tipo_usuario
      FROM usuarios
      WHERE email_a = $1 OR email_e = $1
      LIMIT 1
    `;
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  async compareSenha(senha, usuario) {
    // Decide qual campo de senha comparar baseado no tipo de usuário
    if (usuario.tipo_usuario === 'academico') {
      return senha === usuario.senha_a;
    } else if (usuario.tipo_usuario === 'estudante') {
      return senha === usuario.senha_e;
    }
    return false;
  }
};

module.exports = loginModel;
