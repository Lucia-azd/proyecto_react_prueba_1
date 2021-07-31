import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "../../../assets/carrito_img.png";
import { CartContext } from "../../CartContext/CartContext";

const Carrito = () => {

    const {cantidadCart} = useContext(CartContext)

    return (
    <>
        <Link to="/iStore/Cart">
            <img src={carrito} alt="Carrito" className="carrito-img" />
        </Link>
        {cantidadCart() >= 1 ? <span>{cantidadCart()}</span> : <span></span>}
    </>
    );
};

export default Carrito