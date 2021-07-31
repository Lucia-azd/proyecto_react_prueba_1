import React, { createContext, useState } from "react";
import Item from "../ItemList/Item/Item";

export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)
    const [cantidadProductos, setCantidadProductos] = useState(0)

    const isInCart = (id) => {
        if(cart.find((cartItem) => cartItem.id === id)){
            return true
        }
        return false
    }

    const addItem = (item) => {
        if(isInCart(item.id)){
            cart.find((cartItem) => cartItem.id === item.id).cantidad += item.cantidad
        }else{
            setCart([...cart, item])
        }
        totalCart()
    }

    const totalCart = () => {
        setTotalProductos(cart.reduce( (acc, prod) => acc + (prod.precio * prod.cantidad), 0))
        return totalProductos
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }


    const cantidadCart = () => {
        setCantidadProductos(cart.reduce( (acc, prod) => acc + prod.cantidad, 0))
        return cantidadProductos
    }

    console.log(cart);

    return <CartContext.Provider value={{cart, addItem, cantidadCart}}>
        {children}
    </CartContext.Provider>

}

