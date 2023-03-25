import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer/index';
import ConfigRoutes from './ConfigRoutes';
import Header from './components/Header/index';


function App() {
  return (
    <Router>
      <Header/>
      <ConfigRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
