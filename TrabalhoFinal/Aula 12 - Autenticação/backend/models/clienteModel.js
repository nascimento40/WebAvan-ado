const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const clienteSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        require: true
    },
    telefone: String,
    endereco: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    fotoPerfil: String,
    cartaoCredito: {
        nome: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        cvc: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    dtaCriacao: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        select: false
    }
});

clienteSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;
    next();
});
  
module.exports = mongoose.model('cliente', clienteSchema);
