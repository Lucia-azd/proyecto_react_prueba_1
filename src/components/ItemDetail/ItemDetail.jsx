import React, { useState, useContext } from "react";
import "./ItemDetailStyle.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";


const ItemDetail = ({ producto }) => {

    const {addItem, cart} = useContext(CartContext)
    console.log(cart);

    const Addcart = () => {
        addItem({
            'nombre': producto.nombre,
            'precio': producto.precio,
            'id': producto.id,
            'cantidad': count
        })
    }

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const modifyState = () => setFinished(!finished);

    return (
        <div className="itemsProductos">
            <img src={producto.img} alt="" />
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
            {!finished ? (
                    <>
                    <ItemCount
                        stock={producto.stock}
                        initial={1}
                        count={count}
                        setCount={setCount}
                    />
                    <button onClick={modifyState}>Comprar</button>
                    </>
                ) : (
                    <>
                        <Link to="/cart" onClick={modifyState}>
                            <button onClick={modifyState, Addcart}>Terminar Compra</button>
                        </Link>
                        <button onClick={modifyState}>Modificar</button>
                    </>
                )
            }
        </div>
    );
};

export default ItemDetail