import React, { useContext } from "react";
import "./Cart.css"
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import Form from "../Form/Form";


const Cart = () => {

    const { section } = useParams();

    const {cart, totalCart, removeItem, increaseProduct, decreaseProduct} = useContext(CartContext)

    const productosCart = () => {
        return  cart.map(
            product => (
            <div className="product-cart">
                <img src={product.img} alt={product.name}/>
                <div> 
                    <p>{product.name}</p> 
                </div>
                <div className="quantity-box">
                    <button className="decrease" onClick={() => decreaseProduct(product.name)}>-</button>
                    <p>{product.cantidad}</p>
                    <button className="increase" onClick={() => increaseProduct(product.name, product.stock)}>+</button>
                </div>
                <p>${product.price}</p>
                <button className="eliminar-product" onClick={() => removeItem(product.name)}>X</button>
            </div>)
        )
    } 

    return (
        <div  className={cart.length === 0 ? ("cart-vacio"): "cart"}>
            {section === 'Cart' ? 
            ( cart.length > 0 ? 
                ( <div>
                    <h1 className="title-cart">Carrito</h1>
                    {productosCart()}
                    <h1>Total: ${totalCart()}</h1>
                    <div className="contenedor-finalizar-compra">
                        <Link to="/iStore/Form"><button className="boton-finalizar-compra" >Finalizar compra</button></Link>
                    </div>
                </div>) : 
                ( <div className="aviso-carrito-vacio">
                    <h1>Tu carrito esta vacio</h1>
                    <Link to="/"><h1>¡Seguir comprando!</h1></Link>
                </div>)
            ) : 
            (<><Form/></>)
            }
        </div>
    );
};

export default Cart;
