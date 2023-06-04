const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  codigo: Number,
  nome: String,
  sobrenome: String,
  dataNascimento: Date,
  telefone: String,
  endereco: String,
  cidade: String,
  estado: String,
  status: String,
  fotoPerfil: { data: Buffer, contentType: String }
});

const Subscriber = mongoose.model('assinantes', subscriberSchema);

module.exports = Subscriber;
