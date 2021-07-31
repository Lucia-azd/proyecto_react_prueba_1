import React, { useContext } from "react";
import carrito from "../../../assets/carrito_img.png";
import { CartContext } from "../../CartContext/CartContext";

const Carrito = () => {

    const {cantidadCart} = useContext(CartContext)

    return (
    <>
        <img src={carrito} alt="Carrito" className="carrito-img" />
        <span>{cantidadCart()}</span>
    </>
    );
};

export default Carrito