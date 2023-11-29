import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import Home from './Components/Pages/Home';
import Novoprojeto from './Components/Pages/Novoprojeto';
import Projeto from './Components/Pages/Projeto';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Container from './Components/Layout/Container';

function App() {
  return (
    <Router>

      <div>
        <Navbar />        
      </div>
      <Container customClass="min_height">

          <Routes>          
              <Route exact path="/" element={<Home />} />
              <Route exact path="/empresa" element={<Empresa />} />          
              <Route exact path="/contato" element={<Contato />} />
              <Route exact path="/novoprojeto" element={<Novoprojeto />} />          
              <Route exact path="/projeto" element={<Projeto />} /> 
          </Routes>        

      </Container>

      <div>
        <Footer />
      </div>        

    </Router>

  );
}

export default App;
