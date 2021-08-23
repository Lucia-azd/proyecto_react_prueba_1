import React, { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)
    const [cantidadProductos, setCantidadProductos] = useState(0)

    const isInCart = (name) => {
        if(cart.find((cartItem) => cartItem.name === name)){
            return true
        }
        return false
    }

    const addItem = (item) => {
        
        if(isInCart(item.name)){
            if(item.cantidad + cart.find((cartItem) => cartItem.name === item.name).cantidad <= item.stock){
                cart.find((cartItem) => cartItem.name === item.name).cantidad += item.cantidad
            }else{
                alert("No hay suficiente stock para realizar la compra")
            }
        }else{
            if(item.cantidad > item.stock){
                alert("No hay suficiente stock para realizar la compra")
            }else{
                setCart([...cart, item])
            }
        }
    }

    const totalCart = () => {
        setTotalProductos(cart.reduce( (acc, prod) => acc + (prod.price * prod.cantidad), 0))
        return totalProductos
    }

    const removeItem = (name) => {
        let indice = cart.findIndex(product => product.name === name);
    
        if ( indice !== -1 ) {
            cart.splice( indice, 1)
            setCart([...cart])
        }
    }

    const cantidadCart = () => {
        setCantidadProductos(cart.reduce( (acc, prod) => acc + prod.cantidad, 0))
        return cantidadProductos
    }

    const decreaseProduct = (name) => {
        let product = cart.find((cartItem) => cartItem.name === name)
        if (product.cantidad > 1) {
            product.cantidad -= 1
        }
        setCart([...cart])
    }

    const increaseProduct = (name, stock) => {
        let product = cart.find((cartItem) => cartItem.name === name)
        if (product.cantidad < stock) {
            product.cantidad += 1
        }
        setCart([...cart])
    }

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{cart, addItem, cantidadCart, totalCart, removeItem, increaseProduct, decreaseProduct, clearCart}}>
        {children}
    </CartContext.Provider>

}

