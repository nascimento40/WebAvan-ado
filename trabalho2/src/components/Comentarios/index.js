import React from 'react';

function Comentarios() {
  const comentarios = [
    { nome: 'SagaDouradoMaisForte', mensagem: 'Filme muito ruim.' },
    { nome: 'GarotoTanejerina', mensagem: 'Adorei o filme.' },
    { nome: 'ChavesImortal', mensagem: 'Teria sido melhor ir ver o Pelé.' },
  ];

  return (
    <div className='text-center'>
      <h5>Comentários:</h5>
      {comentarios.length > 0 ? (
        <ul>
          {comentarios.map((comentario, index) => (
            <div key={index}>
              <strong>{comentario.nome}:</strong> {comentario.mensagem}
            </div>
          ))}
        </ul>
      ) : (
        <p>Não há comentários para este filme ainda.</p>
      )}
    </div>
  );
}

export default Comentarios;

