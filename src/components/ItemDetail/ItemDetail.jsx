import React from "react";
import "./ItemDetailStyle.css"
import Contador from "../ItemContador/Contador"

const ItemDetail = ({ productos }) => {

    return (
        <div className="itemsProductos">
            <img src={productos[0].img} alt="" />
            <p>{productos[0].nombre}</p>
            <p>${productos[0].precio}</p>
            <Contador stock={productos[0].stock} cantidadInicial={1}/>
        </div>
    );
};

export default ItemDetail