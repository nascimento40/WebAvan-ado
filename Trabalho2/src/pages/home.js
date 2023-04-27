import React from 'react';
import Filme from './../components/Filme/index';
import Title from './../components/Title/index';

function Home() {
    return (
        <div>
        <Title title="Catálogo de filmes" text="Filmes disponíveis:"/>
        <Filme />
        </div>
    )
}
export default Home;