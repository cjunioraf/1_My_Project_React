import './App.css';
import SayMyName from './Components/SayMyName'; 
import Pessoa from './Components/Pessoa'; 
//fragments - List
import List from './Components/List';
import Evento from './Components/Evento';
import EventoForm from './Components/EventoForm';

function App() { 

  return (  
    <div className="App">
      {/* <SayMyName nome="Clécio"/>           
      <Pessoa nome="Clécio" idade="44" profissao="Programador" imagem="https://via.placeholder.com/150"/>
      <List/> */}
      <h1>Renderização Condicional</h1>
      {/* <Evento />   
      <EventoForm/> */}
    </div>
  );
}

export default App;
