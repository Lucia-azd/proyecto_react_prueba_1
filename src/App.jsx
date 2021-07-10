import './App.css';
import NavBar from './components/Navbar/NavBar';
import Contador from './components/ItemContador/Contador';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contador stock={5} cantidadInicial={1}/>
    </div>
  );
};

export default App;
