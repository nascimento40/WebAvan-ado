const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.salvar);
router.get('/', clienteController.listar);
router.get('/:codigo', clienteController.buscarPorCodigo);
router.put('/:codigo', clienteController.atualizar);
router.delete('/:codigo', clienteController.excluir);

module.exports = router;
