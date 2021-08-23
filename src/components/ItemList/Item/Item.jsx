import React from "react";
import { Link } from "react-router-dom";
import "./ItemStyle.css"

const Item = ({ producto }) => {
    if(producto.categoria === 'Mac'){
        return (
            
                <div className="itemsProductos mac">
                    <img src={producto.img} alt={producto.name} />
                    <p className="name-item">{producto.name}</p>
                    <p>${producto.price}</p>
                    <Link
                        to={`/producto/${producto.id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                </div>
        );
    }else{
        return (
                <div className="itemsProductos">
                    <img src={producto.img} alt={producto.name} />
                    <p>{producto.name}</p>
                    <p style={{fontWeight:"unset", fontSize:"20px"}}>Precio: </p>
                    <p>${producto.price}</p>
                    <Link
                        to={`/producto/${producto.id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                </div> 
        );
    }
};

export default Item