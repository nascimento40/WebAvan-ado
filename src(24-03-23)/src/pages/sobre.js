import React from 'react';
// import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';


function Sobre() {
    // const { name } = useParams();
    
    return (
        <div>
            <Title title="Sobre" text="Conheça mais sobre a nossa empresa"/>
            <p>Informações institucionais</p>
        </div>
    )
}

export default Sobre;