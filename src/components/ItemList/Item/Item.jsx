import React from "react";
import { Link } from "react-router-dom";
import "./ItemStyle.css"

const Item = ({ producto }) => {
    if(producto.categoria === 'Mac'){
        return (
            
                <div className="itemsProductos mac">
                    <img src={producto.img} alt="" />
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                    <Link
                        to={`/producto/${producto.id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                </div>
        );
    }else{
        return (
                <div className="itemsProductos">
                    <img src={producto.img} alt="" />
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                    <Link
                        to={`/producto/${producto.id}`}>
                    <button>Ver Detalles</button>
                    </Link>
                </div> 
        );
    }
    
};

export default Item