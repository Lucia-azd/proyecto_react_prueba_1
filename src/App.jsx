import './App.css';
import React from "react";
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className="productosContenedor">
        <ItemListContainer/>
      </div>
      <div>
        <ItemDetailContainer/>
      </div>
    </div>
  );
};

export default App;
