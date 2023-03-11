import logo from './logo.svg';
import './Emiliano.css';

function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

function Emiliano() {
  return (
    <div className="Emiliano">
      <Welcome name="Emiliano" />
        <img src={logo} className="Emiliano-logo" alt="logo" />
        <p>
          Isto é um componente customizado!
        </p>
        <p>Dev Web Avançado</p>
    </div>
  );
}

export default Emiliano;
