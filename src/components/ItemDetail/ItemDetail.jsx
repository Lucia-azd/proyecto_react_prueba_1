import React from "react";
import "./ItemDetailStyle.css"
import Contador from "../ItemContador/Contador"

const ItemDetail = ({ productos }) => {
    return (
        <div className="itemsProductos">
            <img src={productos.img} alt="" />
            <p>{productos.nombre}</p>
            <p>${productos.precio}</p>
            <Contador stock={productos.stock} cantidadInicial={1}/>
        </div>
    );
};

export default ItemDetail