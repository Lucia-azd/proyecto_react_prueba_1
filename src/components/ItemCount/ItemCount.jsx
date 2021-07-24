import React from "react";
import "./Contador.css"

const ItemCount = ({stock, initial, count, setCount}) => {

    const addUp = () => {
        if (count < stock || count === 0){
            setCount(count + 1);
        }
    }
    const decrease = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }

    return (
        <div className="Contador">
            <button onClick={decrease}> - </button>
            <span> {count} </span>
            <button onClick={addUp}> + </button>
        </div>
    );
};

export default ItemCount;