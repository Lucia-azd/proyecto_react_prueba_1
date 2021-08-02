import React, { createContext, useState } from "react";


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
    }

    const totalCart = () => {
        setTotalProductos(cart.reduce( (acc, prod) => acc + (prod.precio * prod.cantidad), 0))
        return totalProductos
    }

    const removeItem = (id) => {
        let indice = cart.findIndex(product => product.id === id);
    
        if ( indice !== -1 ) {
            cart.splice( indice, 1)
            setCart([...cart])
        }
    }

    const cantidadCart = () => {
        setCantidadProductos(cart.reduce( (acc, prod) => acc + prod.cantidad, 0))
        return cantidadProductos
    }

    const decreaseProduct = (id) => {
        let product = cart.find((cartItem) => cartItem.id === id)
        if (product.cantidad > 1) {
            product.cantidad -= 1
        }
        setCart([...cart])
    }

    const increaseProduct = (id, stock) => {
        let product = cart.find((cartItem) => cartItem.id === id)
        if (product.cantidad < stock) {
            product.cantidad += 1
        }
        setCart([...cart])
    }

    return <CartContext.Provider value={{cart, addItem, cantidadCart, totalCart, removeItem, increaseProduct, decreaseProduct}}>
        {children}
    </CartContext.Provider>

}

