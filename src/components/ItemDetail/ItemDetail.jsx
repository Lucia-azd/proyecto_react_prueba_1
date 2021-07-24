import React, { useState } from "react";
import "./ItemDetailStyle.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({ productos }) => {

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const modifyState = () => setFinished(!finished);

    return (
        <div className="itemsProductos">
            <img src={productos.img} alt="" />
            <p>{productos.nombre}</p>
            <p>${productos.precio}</p>
            {!finished ? (
                    <>
                    <ItemCount
                        stock={productos.stock}
                        initial={1}
                        count={count}
                        setCount={setCount}
                    />
                    <button onClick={modifyState}>Comprar</button>
                    </>
                ) : (
                    <>
                        <Link to="/cart" onClick={modifyState}>
                            <button onClick={modifyState}>Terminar Compra</button>
                        </Link>
                        <button onClick={modifyState}>Modificar</button>
                    </>
                )
            }
        </div>
    );
};

export default ItemDetail