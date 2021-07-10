import React, {useState} from "react";
import "./Contador.css"

const Contador = ({stock, cantidadInicial}) => {
    const [cantidadAgregados, setCantidadAgregados] = useState(cantidadInicial);

    const agregar = () => {
        if (cantidadAgregados < stock || cantidadAgregados === 0){
            setCantidadAgregados(cantidadAgregados + 1);
        }
    }
    const disminuir = () => {
        if (cantidadAgregados > 1){
            setCantidadAgregados(cantidadAgregados - 1);
        }
    }

    return (
        <div className="Contador">
            <h1>iPhone 12 Pro</h1>
            <button onClick={disminuir}>-</button><span>{cantidadAgregados}</span><button onClick={agregar}>+</button>
        </div>
    );
};

export default Contador;