const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  codigo: { type: Number, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true }
});

module.exports = mongoose.model('Categoria', categoriaSchema);
