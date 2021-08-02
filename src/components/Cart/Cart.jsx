import React, { useContext } from "react";
import "./Cart.css"
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

    const { section } = useParams();

    const {cart, totalCart, removeItem, increaseProduct, decreaseProduct} = useContext(CartContext)

    console.log(cart);
    
    const productosCart = () => {
        return  cart.map(
            product => (<div className="product-cart">
                <img src={product.img} alt=""/>
                <div> <p>{product.nombre}</p> </div>
                <div className="quantity-box">
                <button className="decrease" onClick={() => decreaseProduct(product.id)}>-</button>
                <p>{product.cantidad}</p>
                <button className="increase" onClick={() => increaseProduct(product.id, product.stock)}>+</button>
                </div>
                <p>${product.precio}</p>
                <button className="eliminar-product" onClick={() => removeItem(product.id)}>X</button>
            </div>)
        )
    } 

    return (
        <div  className={cart.length == 0 ? ("cart-vacio"): "cart"}>
            {section === 'Cart' ? ( cart.length > 0 ? ( <div><h1 className="title-cart">Carrito</h1>{productosCart()}<h1>Total: ${totalCart()}</h1></div>): ( <div className="aviso-carrito-vacio"><h1>Tu carrito esta vacio</h1><Link to="/"><h1>¡Seguir comprando!</h1></Link></div>)) : (<></>)
            }
        </div>
    );
};

export default Cart;
