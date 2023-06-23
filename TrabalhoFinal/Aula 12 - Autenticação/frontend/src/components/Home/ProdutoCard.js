import React from 'react';
import { Link } from 'react-router-dom';

const ProdutoCard = ({ produto }) => {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} className='w-25'/>
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <p>Nota: {produto.nota}</p>
        <p>Preço: R$ {produto.preco}</p>
        <Link to={`/produto/${produto.codigo}`} className="btn btn-primary">
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default ProdutoCard;


