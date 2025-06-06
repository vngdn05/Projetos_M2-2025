const LoginModel = require('../models/loginModel');

const loginController = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await LoginModel.findByEmail(email);

            if (!usuario || !(await LoginModel.compareSenha(senha, usuario))) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }
            // Redireciona para a página de trabalhos após login bem-sucedido
            res.redirect('/trabalhos');
        } catch (error) {
            res.status(500).json({ error: 'Erro ao realizar login' });
        }
    }
};

module.exports = loginController;