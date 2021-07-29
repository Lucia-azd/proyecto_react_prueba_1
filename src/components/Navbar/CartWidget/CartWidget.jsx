import React, { useContext } from "react";
import carrito from "../../../assets/carrito_img.png";
import { CartContext } from "../../CartContext/CartContext";

const Carrito = () => {

    const {totalCart} = useContext(CartContext)

    return (
    <>
        <img src={carrito} alt="Carrito" className="carrito-img" />
        <span>{totalCart()}</span>
    </>
    );
};

export default Carrito