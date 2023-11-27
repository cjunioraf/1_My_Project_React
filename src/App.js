import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

function App() { 
  return(
    <Router>
      <div>      
        <Navbar />      
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/empresa" element={<Empresa />} />          
          <Route exact path="/contato" element={<Contato />} />
        </Routes>         
      </div>
      <div>
        <Footer />
      </div>        
    </Router>
  )
}

export default App;
