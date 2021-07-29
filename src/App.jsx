import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            {/* RUTAS */}
            <Route exact path="/">
              <div className="productosContenedor">
                <ItemListContainer/>
              </div>
            </Route>

            <Route path="/productos/:cat">
              <div className="productosContenedor">
                <ItemListContainer/>
              </div>
            </Route>

            <Route path="/producto/:idParams">
              <div>
                <ItemDetailContainer/>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
