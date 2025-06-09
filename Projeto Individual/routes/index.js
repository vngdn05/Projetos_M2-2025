const express = require('express');
const router = express.Router();

// Certifique-se de que este arquivo existe e exporta as funções corretamente!
const loginController = require('../controllers/loginController');
const usuariosController = require('../controllers/usuariosController');
const academicosController = require('../controllers/academicosController');
const aulasController = require('../controllers/aulasController');
const projetosController = require('../controllers/projetosController');
const estudantesController = require('../controllers/estudantesController');
const pesquisasController = require('../controllers/pesquisasController');
const trabalhosController = require('../controllers/trabalhosController');
const perfilController = require('../controllers/perfilController');

// Rota inicial
router.get('/', (req, res) => {
  res.redirect('/login');
});

// Adicione esta rota para exibir o formulário de login
router.get('/login', (req, res) => {
  res.render('layout/login');
});

router.post('/login', loginController.login);

// Rotas de Usuários
router.get('/usuarios', usuariosController.listarUsuarios);
router.post('/usuarios', usuariosController.criarUsuario);

// Rotas de Acadêmicos
router.get('/academicos', academicosController.listarTodos);
router.get('/academicos/:id', academicosController.buscarPorId);
router.post('/academicos', academicosController.criar);
router.put('/academicos/:id', academicosController.atualizar);
// router.delete('/academicos/:id', academicosController.remover); // Opcional

// Rotas de páginas principais (renderização de views)
router.get('/trabalhos', trabalhosController.listarTodos);
router.get('/projetos', projetosController.listarTodos);
router.get('/pesquisas', pesquisasController.listarTodos);
router.get('/aulas', aulasController.listarTodas);

// Rotas REST (JSON) para detalhes, criação, edição, etc.
// Trabalhos
router.get('/trabalhos/:id', trabalhosController.buscarPorId);
router.post('/trabalhos', trabalhosController.criar);
router.put('/trabalhos/:id', trabalhosController.atualizar);
router.delete('/trabalhos/:id', trabalhosController.deletar);
router.get('/trabalhos/estudante/:estudante_id', trabalhosController.listarPorEstudante);
router.get('/trabalhos/disciplina/:disciplina_id', trabalhosController.listarPorDisciplina);

// Projetos
router.get('/projetos/:id', projetosController.buscarPorId);
router.post('/projetos', projetosController.criar);
router.put('/projetos/:id', projetosController.atualizar);
router.delete('/projetos/:id', projetosController.deletar);

// Pesquisas
router.get('/pesquisas/:id', pesquisasController.buscarPorId);
router.post('/pesquisas', pesquisasController.criar);
router.put('/pesquisas/:id', pesquisasController.atualizar);
router.delete('/pesquisas/:id', pesquisasController.deletar);
router.get('/pesquisas/estudante/:estudante_id', pesquisasController.listarPorEstudante);

// Aulas
router.get('/aulas/:id', aulasController.buscarPorId);
router.post('/aulas', aulasController.criar);
router.put('/aulas/:id', aulasController.atualizar);
router.delete('/aulas/:id', aulasController.deletar);

// Rota para exibir o perfil
router.get('/perfil', perfilController.mostrarPerfil);

module.exports = router;