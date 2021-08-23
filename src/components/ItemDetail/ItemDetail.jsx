import React, { useState, useContext } from "react";
import "./ItemDetailStyle.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";


const ItemDetail = ({ producto }) => {

    const {addItem} = useContext(CartContext)

    const Addcart = () => {
        addItem({
            'img': producto.img,
            'name': producto.name,
            'price': producto.price,
            'id': producto.id,
            'cantidad': count,
            'stock': producto.stock
        })
    }

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const modifyState = () => setFinished(!finished);

    return (
        <>
        <div className="itemsProductosDetail">
            <div className="img-detail"><img src={producto.img} alt={producto.name} /></div>
            
            {!finished ? (
                    <>
                    <div className="detail">
                        <div>
                            <p className="name-product">{producto.name}</p>
                            <p>${producto.price}</p>
                            <p>stock: {producto.stock > 0 ? (producto.stock) : ("sin stock")}</p>
                        </div>
                        <div className="count-detail">
                            <ItemCount
                                stock={producto.stock}
                                initial={1}
                                count={count}
                                setCount={setCount}
                            />
                            <button style={{margin: "auto"}} onClick={modifyState}>Comprar</button>
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="detail">
                        <div>
                        <p className="name-product">{producto.name}</p>
                        <p>${producto.price}</p>
                        </div>
                        <Link to="/iStore/Cart">
                            <button onClick={Addcart}>Terminar Compra</button>
                        </Link>
                        <button onClick={modifyState}>Modificar</button>
                    </div>
                )
            }
        </div>
        <div className="title-spe"><h2>Especificaciones</h2></div>
        <div className="spe"><p>{producto.spe}</p></div>
        <div className="title-info"><h2>Información del Producto</h2></div>
        <div className="info"><p>{producto.info}</p></div>
        </>
    );
};

export default ItemDetail