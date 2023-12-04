import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import Home from './Components/Pages/Home';
import Novoprojeto from './Components/Pages/Novoprojeto';
import Projetos from './Components/Pages/Projetos';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Container from './Components/Layout/Container';
import Projeto from './Components/Pages/Projeto';

function App() {
  return (
    <Router>

      <div>
        <Navbar />        
      </div>
      <Container customClass="min_height">

          <Routes>          
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/empresa" element={<Empresa />} />           */}
              <Route path="/contato" element={<Contato />} />
              <Route path="/novoprojeto" element={<Novoprojeto />} />          
              <Route path="/projetos" element={<Projetos />} />               
              <Route path="/projeto/:id" element={<Projeto />} /> 
          </Routes>        

      </Container>

      <div>
        <Footer />
      </div>        

    </Router>

  );
}

export default App;
