import React from 'react';
// import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';


function Sobre() {
  // const { name } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Title title="Sobre" text="Conheça mais sobre a nossa empresa" />
          <p>
            Cineflix é uma empresa de filmes que oferece aos clientes uma ampla seleção de filmes para alugar e comprar. 
            Nós nos esforçamos para fornecer uma experiência única e envolvente para os nossos clientes, desde a seleção dos filmes até a forma como eles são apresentados. 
            Acreditamos que o poder do cinema pode mudar a forma como as pessoas se conectam, inspiram e são entretidas.
          </p>
          <p>
            Nossa missão é fornecer aos nossos clientes a melhor seleção de filmes em um ambiente de fácil utilização. 
            Acreditamos que o cinema é uma forma única de arte e queremos torná-lo acessível a todos.
          </p>
          <img src={'/assets/images/logo.jpg'} alt="logo" className="w-25" style={{ float: 'right' }} />
        </div>
      </div>
    </div>
  );
}

   

export default Sobre;