import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer 
      saludoUsuario="Bienvenidos/as!"/>
    </div>
  );
};

export default App;
