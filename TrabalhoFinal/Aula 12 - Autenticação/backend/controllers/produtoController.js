const Produto = require('../models/produtoModel');

// Cadastrar um novo produto
exports.cadastrarProduto = async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Editar um produto existente
exports.editarProduto = async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retornar a lista completa de produtos
exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retornar um produto por código
exports.obterProdutoPorCodigo = async (req, res) => {
  try {
    const produto = await Produto.findOne({ codigo: req.params.codigo });
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

