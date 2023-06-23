const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true },
  nome: { type: String, required: true },
  imagem: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  animal: { type: String, required: true },
  comentarios: [
    {
      texto: { type: String, required: true },
      nota: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Produto', produtoSchema);

