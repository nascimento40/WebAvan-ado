import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetalhesProduto = ({ match }) => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Função para buscar os detalhes do produto
    const obterDetalhesProduto = async () => {
      try {
        const response = await axios.get(`/api/produtos/${match.params.codigo}`);
        setProduto(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    obterDetalhesProduto();
  }, [match.params.codigo]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>Tela Detalhes do Produto</h1>
      <div className="row">
        <div className="col-4">
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        <div className="col-8">
          <h2>{produto.nome}</h2>
          <p>Categoria: {produto.categoria}</p>
          <p>Descrição: {produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>
          <p>Nota: {produto.nota}</p>
          <p>Quantidade: {produto.quantidade}</p>
          <button className="btn btn-primary">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default DetalhesProduto;

