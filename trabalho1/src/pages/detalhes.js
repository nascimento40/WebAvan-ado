import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "nome": "Bad Boys",
    "duracao": "1H59",
    "foto": "BadBoys.jpg",
    "ano": 1995,
    "assistido": true,
    "genero": "Ação/Comédia",
    "descricao": "Em Miami, os detetives Mike Lowrey e Marcus Burnett trocam de identidade enquanto investigam assassinatos ligados ao roubo de uma carga de 100 milhões de dólares em heroína, que recentemente confiscaram.",
    "nota": 5
},
{
    "nome": "Bad Boys 2",
    "duracao": "2H26",
    "foto": "BadBoys2.jpg",
    "ano": 2003,
    "assistido": true,
    "genero": "Ação/Comédia",
    "descricao": "Os detetives Marcus Burnett e Mike Lowrey são escolhidos para investigar a proliferação de ecstasy na cidade de Miami. As investigações levam a um alvo maior, Johnny Tapia, um traficante cuja ambição de tomar conta do tráfico na cidade inicia uma verdadeira guerra sangrenta contra criminosos russos e haitianos. Em meio a esta situação, Lowrey passa a se interessar por Syd, irmã de Burnett, o que põe a amizade dos detetives à prova.",
    "nota": 5
},
{
    "nome": "Bad Boys para sempre",
    "duracao": "2H04",
    "foto": "BadBoys3.jpg",
    "ano": 2020,
    "assistido": false,
    "genero": "Ação/Comédia",
    "descricao": "Os policiais Mike Lowery e Marcus Burnett se juntam à recém-criada equipe de elite do departamento de polícia de Miami para derrubar o líder de um cartel de drogas da cidade.",
    "nota": 5
}
]

function Assistido(props) {
    const javisto = props.javisto;
    if (javisto) {
      return <p className='text-success'>Assistido :D</p>;
    } else {
      return <p className='text-danger'>Não assistido</p>;
    }
}

function Detalhes() {
    const { filme } = useParams();

    return (
        <div className='text-center'>
            <Title title={filme} text="Informações do filme clicado:"/>
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Bad Boys') {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={'/assets/images/BadBoys.jpg'} alt={filme.nome} className="card-img-top h-25 w-25" />
                            <div style={{ width: '20%' }}>
                                <p>{filmes[0].nome}</p>
                                <p>{filmes[0].duracao}</p>
                                <p>{filmes[0].genero}</p>
                                <p>Sinopse:</p>
                                <p>{filmes[0].descricao}</p>
                                <p>{filmes[0].nota}</p>
                                <Assistido javisto={filmes[0].assistido} />
                            </div>
                        </div>
                    )
                } else if (filme == 'Bad Boys 2') {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={'/assets/images/BadBoys2.jpg'} alt={filme.nome} className="card-img-top h-25 w-25" />
                            <div style={{ width: '20%' }}>
                                <p>{filmes[1].nome}</p>
                                <p>{filmes[1].duracao}</p>
                                <p>{filmes[1].genero}</p>
                                <p>Sinopse:</p>
                                <p>{filmes[1].descricao}</p>
                                <p>{filmes[1].nota}</p>
                                <Assistido javisto={filmes[1].assistido} />
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={'/assets/images/BadBoys3.jpg'} alt={filme.nome} className="card-img-top h-25 w-25" />
                            <div style={{ width: '20%' }}>
                                <p>{filmes[2].nome}</p>
                                <p>{filmes[2].duracao}</p>
                                <p>{filmes[2].genero}</p>
                                <p>Sinopse:</p>
                                <p>{filmes[2].descricao}</p>
                                <p>{filmes[2].nota}</p>
                                <Assistido javisto={filmes[2].assistido} />
                            </div>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;