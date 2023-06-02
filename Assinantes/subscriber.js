const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Definição do esquema do assinante
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
  profileImage: String,
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Rota para listar todos os assinantes
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    console.error('Erro ao obter os assinantes:', error);
    res.status(500).json({ error: 'Erro ao obter os assinantes' });
  }
});

// Rota para obter um único assinante pelo código
router.get('/:codigo', async (req, res) => {
  const { codigo } = req.params;
  try {
    const subscriber = await Subscriber.findOne({ codigo });
    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }
    res.json(subscriber);
  } catch (error) {
    console.error('Erro ao obter o assinante:', error);
    res.status(500).json({ error: 'Erro ao obter o assinante' });
  }
});

// Rota para pesquisar assinantes por nome, sobrenome, cidade, estado e status
router.get('/search', async (req, res) => {
  const { nome, sobrenome, cidade, estado, status } = req.query;
  const searchQuery = {};
  if (nome) {
    searchQuery.nome = nome;
  }
  if (sobrenome) {
    searchQuery.sobrenome = sobrenome;
  }
  if (cidade) {
    searchQuery.cidade = cidade;
  }
  if (estado) {
    searchQuery.estado = estado;
  }
  if (status) {
    searchQuery.status = status;
  }
  try {
    const subscribers = await Subscriber.find(searchQuery);
    res.json(subscribers);
  } catch (error) {
    console.error('Erro ao pesquisar os assinantes:', error);
    res.status(500).json({ error: 'Erro ao pesquisar os assinantes' });
  }
});

// Rota para cadastrar um novo assinante
router.post('/', async (req, res) => {
  const {
    codigo,
    nome,
    sobrenome,
    dataNascimento,
    telefone,
    endereco,
    cidade,
    estado,
    status,
    profileImage,
  } = req.body;

  const subscriber = new Subscriber({
    codigo,
    nome,
    sobrenome,
    dataNascimento,
    telefone,
    endereco,
    cidade,
    estado,
    status,
    profileImage,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    console.error('Erro ao cadastrar o assinante:', error);
    res.status(500).json({ error: 'Erro ao cadastrar o assinante' });
  }
});

// Rota para atualizar as informações de um assinante
router.put('/:codigo', async (req, res) => {
  const { codigo } = req.params;
  const {
    nome,
    sobrenome,
    dataNascimento,
    telefone,
    endereco,
    cidade,
    estado,
    status,
    profileImage,
  } = req.body;

  try {
    const subscriber = await Subscriber.findOne({ codigo });

    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }

    subscriber.nome = nome || subscriber.nome;
    subscriber.sobrenome = sobrenome || subscriber.sobrenome;
    subscriber.dataNascimento = dataNascimento || subscriber.dataNascimento;
    subscriber.telefone = telefone || subscriber.telefone;
    subscriber.endereco = endereco || subscriber.endereco;
    subscriber.cidade = cidade || subscriber.cidade;
    subscriber.estado = estado || subscriber.estado;
    subscriber.status = status || subscriber.status;
    subscriber.profileImage = profileImage || subscriber.profileImage;

    const updatedSubscriber = await subscriber.save();
    res.json(updatedSubscriber);
  } catch (error) {
    console.error('Erro ao atualizar o assinante:', error);
    res.status(500).json({ error: 'Erro ao atualizar o assinante' });
  }
});

// Rota para deletar um assinante
router.delete('/:codigo', async (req, res) => {
  const { codigo } = req.params;

  try {
    const subscriber = await Subscriber.findOne({ codigo });

    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }

    await subscriber.remove();
    res.json({ message: 'Assinante removido com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar o assinante:', error);
    res.status(500).json({ error: 'Erro ao deletar o assinante' });
  }
});

module.exports = router;

