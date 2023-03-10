import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const removerItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const estaEnElCarrito = (id) => {
        return cart.some(product => product.id === id)
    }

    const carritoVacio = () => {
        setCart([])
    }

    const totalDelCarrito = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            removerItem,
            estaEnElCarrito,
            carritoVacio,
            totalDelCarrito,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}

