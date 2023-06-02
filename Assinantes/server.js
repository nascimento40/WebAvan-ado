const express = require('express');
const mongoose = require('mongoose');
const subscriberRoutes = require('./subscriber');

// Configurações do servidor e conexão com o banco de dados
const app = express();
mongoose.connect('mongodb://localhost:27017/assinantes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida com o MongoDB');
});

// Middleware para processar o corpo das requisições como JSON
app.use(express.json());

// Rotas dos assinantes
app.use('/subscribers', subscriberRoutes);

// Início do servidor
app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});


