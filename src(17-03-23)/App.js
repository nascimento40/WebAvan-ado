import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';

function App() {
  return (
    <Router>
      <div className='App'>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                  <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
              </a>

              <div class="col-md-3 text-end">
                  <button type="button" class="btn btn-outline-primary me-2">Login</button>
                  <button type="button" class="btn btn-primary">Cadastrar</button>
              </div>

              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li> <Link to='/'><a href="#" class="nav-link px-2 link-secondary">Home</a></Link> </li>
                <li> <Link to='/planos'><a href="#" class="nav-link px-2 link-dark">Preços</a></Link> </li>
                <li> <Link to='/sobre/Emiliano do Nascimento'><a href="#" class="nav-link px-2 link-dark">Sobre</a></Link> </li>
              </ul>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='planos' element={<Planos />} />
                <Route path='sobre/:name' element={<Sobre />} />
                <Route path='detalhes/:filme' element={<Detalhes />} />
                <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
              </Routes>
      </header>
      </div>
    </Router>
  );
}

export default App;
