const express = require('express');
const categoriaController = require('../controllers/categoriaController');

const router = express.Router();

// Rota: Cadastrar categoria
router.post('/categorias', categoriaController.cadastrarCategoria);

// Rota: Editar categoria
router.put('/categorias', categoriaController.editarCategoria);

// Rota: Retornar lista de categorias
router.get('/categorias', categoriaController.listarCategorias);

// Rota: Retornar categoria por código
router.get('/categorias/:codigo', categoriaController.obterCategoriaPorCodigo);

module.exports = router;
