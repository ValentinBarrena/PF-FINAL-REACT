import { createContext, useContext, useState } from "react"

export const CartContext = createContext()

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(producto => producto.id === id)
    }

    const addItem = (producto, quantity) => {
        if (isInCart(producto.id)) {
            const updatedCart = cart.map((item) => {
                if (item.id === producto.id) {
                    item.cant += quantity;
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            const nuevoProducto = {
                ...producto,
                cant: quantity,
            };
            setCart([...cart, nuevoProducto]);
        }
    }

    const removerItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const limpiarCarrito = () => {
        setCart([])
    };


    console.log(cart)
    return (
        <CartContext.Provider value={{ cart, addItem, removerItem, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}