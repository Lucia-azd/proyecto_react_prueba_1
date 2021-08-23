import React, { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)
    const [cantidadProductos, setCantidadProductos] = useState(0)


    /* Si el item mandado por parametro se encuentra en el cart devuelve True caso contrario False */
    const isInCart = (name) => {
        if(cart.find((cartItem) => cartItem.name === name)){
            return true
        }
        return false
    }

    /* Verifica si el item ya esta en el carrito si ya esta solo modifica la cantidad del item caso contrario lo agrega al carrito (en ambos casos se verifica si la cantidad a agregar es menor al stock disponible de ese item) */
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

    /* Devuelve el total de la suma de todos los productos en el carrito */
    const totalCart = () => {
        setTotalProductos(cart.reduce( (acc, prod) => acc + (prod.price * prod.cantidad), 0))
        return totalProductos
    }

    /* Se busca el indice del producto deseado en el carrito una vez obtenido se lo remueve del carrito */
    const removeItem = (name) => {
        let indice = cart.findIndex(product => product.name === name);
    
        if ( indice !== -1 ) {
            cart.splice( indice, 1)
            setCart([...cart])
        }
    }

    /* Devuelve la cantidad de productos en el carrito */
    const cantidadCart = () => {
        setCantidadProductos(cart.reduce( (acc, prod) => acc + prod.cantidad, 0))
        return cantidadProductos
    }

    /* Disminuye la cantidad del producto mandado por parametro */
    const decreaseProduct = (name) => {
        let product = cart.find((cartItem) => cartItem.name === name)
        if (product.cantidad > 1) {
            product.cantidad -= 1
        }
        setCart([...cart])
    }

    /* Aumenta la cantidad del producto mandado por parametro */
    const increaseProduct = (name, stock) => {
        let product = cart.find((cartItem) => cartItem.name === name)
        if (product.cantidad < stock) {
            product.cantidad += 1
        }
        setCart([...cart])
    }

    /* Vacia el carrito */
    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{cart, addItem, cantidadCart, totalCart, removeItem, increaseProduct, decreaseProduct, clearCart}}>
        {children}
    </CartContext.Provider>

}

