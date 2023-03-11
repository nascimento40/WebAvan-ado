import './Header.css';

const elementOlaMundo = <h1>Ola, Mundo</h1>;

const nome = 'Emiliano' 
const elementHCustom = <h1>Ola, usuario {nome}</h1>


function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
      <h1>Web Dev Avançado</h1>
      <ul>{elementOlaMundo}</ul>
      <ul>{elementHCustom}</ul>
      </header>
    </div>
  );
}

export default Header;
