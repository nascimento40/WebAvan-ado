import "./Filme.css";

const filmes = [{
  "nome": "Bad Boys",
  "duracao": "1H59",
  "foto": "BadBoys.jpg",
  "ano": 1995,
  "assistido": true,
  "genero": "Ação/Comédia",
  "descricao": "Filme de ação policial",
  "nota": 5
},
{
  "nome": "Bad Boys 2",
  "duracao": "2H26",
  "foto": "BadBoys2.jpg",
  "ano": 2003,
  "assistido": true,
  "genero": "Ação/Comédia",
  "descricao": "Filme de ação policial",
  "nota": 5
},
{
  "nome": "Bad Boys para sempre",
  "duracao": "2H04",
  "foto": "BadBoys3.jpg",
  "ano": 2020,
  "assistido": false,
  "genero": "Ação/Comédia",
  "descricao": "Filme de ação policial",
  "nota": 5
}
]

function Assistido({javisto}) {
  if (javisto) {
    return <p className="text-success">Assistido :D</p>
  } else{
    return <p className="text-danger">Não assistido</p>
  }
}

export default function Filme() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assistido javisto={filme.assistido}/>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}