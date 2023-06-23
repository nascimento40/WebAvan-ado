const express = require('express');
const produtoController = require('../controllers/produtoController');

const router = express.Router();

// Rotas para Produto
router.post('/', produtoController.cadastrarProduto);
router.put('/:id', produtoController.editarProduto);
router.get('/', produtoController.listarProdutos);
router.get('/:codigo', produtoController.obterProdutoPorCodigo);

module.exports = router;
