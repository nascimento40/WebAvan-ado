import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "nome": "Bad Boys",
    "genero": "Ação/Comédia",
    "descricao": "Filme de ação policial",
    "nota": 5
},
{
    "nome": "Bad Boys 2",
    "genero": "Ação/Comédia",
    "descricao": "Filme de ação policial",
    "nota": 5
},
{
    "nome": "Bad Boys para sempre",
    "genero": "Ação/Comédia",
    "descricao": "Filme de ação policial",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title title={filme} text="Informações do filme clicado:"/>
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Bad Boys') {
                    return (
                        <div>
                            <p>{filmes[0].descricao}</p>
                            <p>{filmes[0].genero}</p>
                        </div>
                    )
                } else if (filme == 'Bad Boys 2') {
                    return (
                        <div>
                            <p>{filmes[1].descricao}</p>
                            <p>{filmes[1].genero}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>{filmes[2].descricao}</p>
                            <p>{filmes[2].genero}</p>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;