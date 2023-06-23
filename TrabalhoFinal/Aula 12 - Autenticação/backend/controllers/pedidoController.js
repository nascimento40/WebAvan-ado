const pedidoModel = require('../models/pedidoModel');
const clienteModel = require('../models/clienteModel');

class PedidoController {
    async salvar(req, res) {
        const max = await pedidoModel.findOne({}).sort({ codigo: -1 });
        const pedido = req.body;
        pedido.codigo = max == null ? 1 : max.codigo + 1;

        const cliente = await clienteModel.findOne({ codigo: pedido.cliente.codigo });
        pedido.cliente = cliente._id;

        const resultado = await pedidoModel.create(pedido);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await pedidoModel.find({ 'clienteId': req.params.clienteId });
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const { clienteId, codigo } = req.params;
        const resultado = await pedidoModel.findOne({ 'codigo': codigo, 'clienteId': clienteId });
        res.status(200).json(resultado);
    }

    async editarStatus(req, res) {
        const { clienteId, codigo } = req.params;
        const { status } = req.body;
    
        try {
          const pedido = await pedidoModel.findOneAndUpdate(
            { 'codigo': codigo, 'clienteId': clienteId },
            { 'status': status },
            { new: true }
          );
    
          if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado.' });
          }
    
          res.status(200).json(pedido);
        } catch (error) {
          res.status(500).json({ error: 'Ocorreu um erro ao editar o status do pedido.' });
        }
    }
}

module.exports = new PedidoController();

