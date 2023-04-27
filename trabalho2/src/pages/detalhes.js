import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comentarios from './../components/Comentarios/index';

function Assistido({javisto}) {
  if (javisto) {
    return <p className="text-success">Assistir novamente</p>
  } else{
    return <p className="text-danger">Assistir</p>
  }
}

function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
      .then(response => response.json())
      .then(data => {
        setFilme(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (isLoading) {
    return <p className='text-center'>Carregando...</p>;
  }

  if (!filme) {
    return <p className='text-center'>Não foi possível encontrar os detalhes do filme.</p>;
  }

  return (
    <div className="container text-center">
      <Title title={filme.titulo} text="Informações do filme clicado:" />
      <div className="row">
        <div className="col">
          <img
            src={filme.poster}
            alt={filme.titulo}
            className="poster"
          />
        </div>
        <div className="">
          <h1>{filme.titulo}</h1>
          <p>Ano: {filme.ano}</p>
          <p>Sinopse: {filme.sinopse}</p>
          <button className='rounded'><Assistido javisto={filme.assistido}/></button>
        </div>
      </div>
      <hr />
      <Comentarios />
    </div>
  );
}

export default Detalhes;





