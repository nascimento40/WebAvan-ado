/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';

const numbers = [0,1,2,3]
const listNumbers = numbers.map((num) => 
 <li>{num * 2}</li>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web Dev Avançado</h1>
        <ul>{listNumbers}</ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React e NodeJS
        </a>
      </header>
    </div>
  );
}

export default App;
