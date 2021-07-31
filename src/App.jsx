import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
/* import {
  Carousel, Jumbotron, Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' */
import CarouselBootstrap from './components/CarouselBootstrap/CarouselBootstrap';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            {/* RUTAS */}
            <Route exact path="/">
              <CarouselBootstrap/>
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
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
