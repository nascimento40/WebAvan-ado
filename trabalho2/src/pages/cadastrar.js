import React, { useState } from 'react';

function Cadastrar() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [numCartao, setNumCartao] = useState('');
  const [cvc, setCvc] = useState('');
  const [planoEscolhido, setPlanoEscolhido] = useState('');
  const [planoClicked, setPlanoClicked] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      nome,
      endereco,
      telefone,
      nomeCartao,
      numCartao,
      cvc,
      planoEscolhido
    });
  };

  const handlePlanoClick = (plano) => {
    if (plano === planoEscolhido) {
      setPlanoEscolhido('');
      setPlanoClicked('');
    } else {
      setPlanoEscolhido(plano);
      setPlanoClicked(plano);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form container text-center">
      <div style={{ display: 'inline-block', width: '50%' }}>
        <h6>Dados Pessoais:</h6>
        <div className="group p-2">
          <label className='m-1'>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="group p-2">
          <label className='m-1'>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
        </div>
        <div className="group p-2">
          <label className='m-1'>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </div>
      </div>
      <div style={{ display: 'inline-block', width: '50%' }} className='row'>
        <h6>Dados do Cartão:</h6>
        <div className="group p-2">
          <label className='m-1'>Nome do cartão:</label>
          <input
            type="text"
            value={nomeCartao}
            onChange={(event) => setNomeCartao(event.target.value)}
          />
        </div>
        <div className="group p-2">
          <label className='m-1'>Número do cartão:</label>
          <input
            type="text"
            value={numCartao}
            onChange={(event) => setNumCartao(event.target.value)}
            maxLength="20"
          />
        </div>
        <div className="group p-2">
          <label className='m-1'>CVC:</label>
          <input
            type="password"
            value={cvc}
            onChange={(event) => setCvc(event.target.value)}
            maxLength="3"
          />
        </div>
      </div>
      <div className="group p-2">
        <h6>Plano escolhido:</h6>
        <button
          onClick={() => handlePlanoClick('básico')}
          style={{ backgroundColor: planoClicked === 'básico' ? 'green' : 'white' }}
          className='m-1'
        >
          Básico
        </button>
        <button
          onClick={() => handlePlanoClick('intermediário')}
          style={{ backgroundColor: planoClicked === 'intermediário' ? 'green' : 'white' }}
          className='m-1'
        >
          Intermediário
        </button>
        <button
          onClick={() => handlePlanoClick('premium')}
          style={{ backgroundColor: planoClicked === 'premium' ? 'green' : 'white' }}
          className='m-1'
        >
          Premium
        </button>
      </div>
      <button type="submit">Assinar</button>
    </form>
  );
}

export default Cadastrar;


