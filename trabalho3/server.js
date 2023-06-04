const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Diretório onde os uploads serão salvos

const app = express();
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/subscribers', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao banco de dados');
})
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});

// Rotas
const Subscriber = require('./subscriber');

// Rota para cadastrar um novo assinante
app.post('/subscribers', upload.single('fotoPerfil'), async (req, res) => {
  try {
    const { 
        codigo, 
        nome, 
        sobrenome, 
        dataNascimento, 
        telefone, 
        endereco, 
        cidade, 
        estado, 
        status 
    } = req.body;
    const fotoPerfil = req.file ? { 
        data: req.file.buffer, 
        contentType: req.file.mimetype 
    } : null;

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
      fotoPerfil
    });

    await subscriber.save();
    res.json(subscriber);
  } catch (error) {
    console.error('Erro ao cadastrar assinante:', error);
    res.status(500).json({ error: 'Erro ao cadastrar assinante' });
  }
});

// Rota para editar informações pessoais do assinante
app.put('/subscribers/:codigo', upload.single('fotoPerfil'), async (req, res) => {
  try {
    const { codigo } = req.params;
    const { 
        nome, 
        sobrenome, 
        dataNascimento, 
        telefone, 
        endereco, 
        cidade, 
        estado, 
        status 
    } = req.body;
    const fotoPerfil = req.file ? { 
        data: req.file.buffer, 
        contentType: req.file.mimetype 
    } : null;

    const subscriber = await Subscriber.findOne({ codigo });

    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }

    subscriber.nome = nome;
    subscriber.sobrenome = sobrenome;
    subscriber.dataNascimento = dataNascimento;
    subscriber.telefone = telefone;
    subscriber.endereco = endereco;
    subscriber.cidade = cidade;
    subscriber.estado = estado;
    subscriber.status = status;
    subscriber.fotoPerfil = fotoPerfil;

    await subscriber.save();
    res.json(subscriber);
  } catch (error) {
    console.error('Erro ao editar informações do assinante:', error);
    res.status(500).json({ error: 'Erro ao editar informações do assinante' });
  }
});

// Rota para listar todos os assinantes
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    console.error('Erro ao listar assinantes:', error);
    res.status(500).json({ error: 'Erro ao listar assinantes' });
  }
});

// Rota para obter um único assinante por código
app.get('/subscribers/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const subscriber = await Subscriber.findOne({ codigo });

    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }

    res.json(subscriber);
  } catch (error) {
    console.error('Erro ao obter assinante:', error);
    res.status(500).json({ error: 'Erro ao obter assinante' });
  }
});

// Rota para buscar assinantes por nome, sobrenome, cidade, estado e status
app.get('/subscribers/search', async (req, res) => {
  try {
    const { nome, sobrenome, cidade, estado, status } = req.query;
    const query = {};

    if (nome) {
      query.nome = { $regex: nome, $options: 'i' };
    }
    if (sobrenome) {
      query.sobrenome = { $regex: sobrenome, $options: 'i' };
    }
    if (cidade) {
      query.cidade = { $regex: cidade, $options: 'i' };
    }
    if (estado) {
      query.estado = { $regex: estado, $options: 'i' };
    }
    if (status) {
      query.status = status;
    }

    const subscribers = await Subscriber.find(query);
    res.json(subscribers);
  } catch (error) {
    console.error('Erro ao pesquisar assinantes:', error);
    res.status(500).json({ error: 'Erro ao pesquisar assinantes' });
  }
});

// Rota para deletar um assinante
app.delete('/subscribers/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const subscriber = await Subscriber.findOneAndDelete({ codigo });

    if (!subscriber) {
      return res.status(404).json({ error: 'Assinante não encontrado' });
    }

    res.json(subscriber);
  } catch (error) {
    console.error('Erro ao deletar assinante:', error);
    res.status(500).json({ error: 'Erro ao deletar assinante' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
