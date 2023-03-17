import './Card.css';

const listFilmes = [{
    "nome": "Bad Boys",
    "duracao": "1H59",
    "foto": "vingadores.jpg",
    "ano": 1995,
    "genero": "Ação/Comédia",
    "descricao": "Os policiais Burnett e Lowrey são encarregados de encontrar um carregamento de heroína que foi roubado. 
    Uma testemunha liga para a delegacia dizendo ser capaz de identificar o ladrão. 
    O pacato Burnett finge ser Lowrey para não perder o caso e acaba tendo que proteger a mulher, enquanto seu parceiro mulherengo cuida de sua família.",
    "nota": 5
},

{
    "nome": "Bad Boys 2",
    "duracao": "2H26",
    "foto": "vingadores.jpg",
    "ano": 2003,
    "genero": "Ação/Comédia",
    "descricao": "Os detetives da Narcóticos Marcus Burnett e Mike Lowrey foram designados para investigar a proliferação do ecstasy na cidade de Miami. 
    As investigações os levam a um alvo maior, Johnny Tapia, um traficante cuja ambição de tomar conta do tráfico na cidade inicia uma verdadeira guerra entre quadrilhas. 
    Em meio a esta situação, Lowrey passa a se interessar por Syd, irmã de Burnett, o que põe a amizade deles à prova.",
    "nota": 4.5
},

{
    "nome": "Bad Boys para sempre",
    "duracao": "2H04",
    "foto": "vingadores.jpg",
    "ano": 2020,
    "genero": "Ação/Comédia",
    "descricao": "Marcus é inspetor de polícia e Mike está passando por uma crise de meia idade. 
    Eles se reúnem novamente quando um mercenário albanês, irmão de alguém do passado de ambos, lhes promete um bônus, no mínimo, interessante.",
    "nota": 3
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
