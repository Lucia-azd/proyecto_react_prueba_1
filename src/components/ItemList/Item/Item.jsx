import React from "react";
import "./ItemStyle.css"

const Item = ({ producto }) => {
    return (
        <div className="itemsProductos">
            <img src={producto.img} alt="" />
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
        </div>
    );
};

export default Item