import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Filme.css";

function Assistido({javisto}) {
  if (javisto) {
    return <p className="text-success">Assistir novamente</p>
  } else{
    return <p className="text-danger">Assistir</p>
  }
}

export default function Filme() {
  const [filmes, setFilmes] = useState([]);
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const [ordem, setOrdem] = useState("titulo");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((res) => res.json())
      .then((data) => setFilmes(data));
  }, []);

  const filmesFiltrados = filmes
    .filter((filme) =>
      filme.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())
    )
    .sort((a, b) => {
      if (ordem === "titulo") {
        return a.titulo.localeCompare(b.titulo);
      } else if (ordem === "ano") {
        return a.ano - b.ano;
      } else if (ordem === "nota") {
        return b.nota - a.nota;
      } else {
        return 0;
      }
    });

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="Pesquisar por titulo"
            value={filtroTitulo}
            onChange={(e) => setFiltroTitulo(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="ordem-select">Ordenar por:</label>
          <select
            id="ordem-select"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
          >
            <option value="titulo">Título</option>
            <option value="ano">Ano</option>
            <option value="nota">Nota</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filmesFiltrados.map((filme, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
              <img
                src={filme.poster}
                alt={filme.titulo}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.titulo} ({filme.ano}){" "}
                </h5>
                <p>{filme.nota}</p>
                <Assistido javisto={filme.assistido}/>
                <Link key={filme.id} to={`/detalhes/${filme.id}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


