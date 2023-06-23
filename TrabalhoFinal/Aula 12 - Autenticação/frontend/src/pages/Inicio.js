import React from 'react';
import Title from './../components/Title/index';
import Home from '../components/Home/index';

export default function Cliente() {
    return (
        <div>
            <Title
                title={"Produto"}
                text={"Lista de Produtos"} />
            <Home />
        </div>
    )
}