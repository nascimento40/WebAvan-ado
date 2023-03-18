import "./Filme.css";

const filmes = [{
  "nome": "Bad Boys",
  "duracao": "1H59",
  "foto": "BadBoys.jpg",
  "ano": 1995,
},
{
  "nome": "Bad Boys 2",
  "duracao": "2H26",
  "foto": "BadBoys2.jpg",
  "ano": 2003,
},
{
  "nome": "Bad Boys para sempre",
  "duracao": "2H04",
  "foto": "BadBoys3.jpg",
  "ano": 2020,
}
]

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>{filme.duracao}</p>
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