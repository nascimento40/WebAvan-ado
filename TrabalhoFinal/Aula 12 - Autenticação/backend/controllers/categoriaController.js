const Categoria = require('../models/categoriaModel');

// Cadastrar categoria
exports.cadastrarCategoria = async (req, res) => {
  try {
    const { codigo, nome, descricao } = req.body;
    const categoria = new Categoria({ codigo, nome, descricao });
    await categoria.save();
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao cadastrar a categoria.' });
  }
};

// Editar categoria
exports.editarCategoria = async (req, res) => {
  try {
    const { codigo, nome, descricao } = req.body;
    const categoria = await Categoria.findOneAndUpdate(
      { codigo },
      { nome, descricao },
      { new: true }
    );
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada.' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao editar a categoria.' });
  }
};

// Retornar lista de categorias
exports.listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao listar as categorias.' });
  }
};

// Retornar categoria por código
exports.obterCategoriaPorCodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const categoria = await Categoria.findOne({ codigo });
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada.' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao obter a categoria.' });
  }
};
