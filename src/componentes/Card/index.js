import './Card.css';

const listFilmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.jpg",
    "ano": 2010,
    "genero": "Ação/Nerd",
    "descricao": "filme da Marvel com super-hérois",
    "nota": 5
},

{
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "foto": "vingadores.jpg",
    "ano": 2014,
    "genero": "Ação/Nerd",
    "descricao": "filme da Marvel com super-hérois",
    "nota": 5
},

{
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "foto": "vingadores.jpg",
    "ano": 2015,
    "genero": "Ação/Nerd",
    "descricao": "filme da Marvel com super-hérois",
    "nota": 5
}

]

function Card() {
  return (
    <div className="Card">
        <div className="container">
            <div className="row">
                {
                    listFilmes.map((filme) =>
                    <div className="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    {filme.nome}
                                </p>
                                <p class="card-text">
                                    {filme.duracao}
                                </p>
                                <p class="card-text">
                                    {filme.ano}
                                </p>
                                <p class="card-text">
                                    {filme.genero}
                                </p>
                                <p class="card-text">
                                    {filme.descricao}
                                </p>
                                <p class="card-text">
                                    {filme.nota}
                                </p>
                                <button>
                                <a href={'https://youtube.com/results?search_query=${filme.nome} Trailer'}>Trailer</a>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default Card;