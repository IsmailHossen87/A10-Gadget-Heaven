// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.product_id === product.product_id);

        if (isProductInCart) {
            toast.warning('Already added the item!',{
                position:'top-center',
                autoClose:1200
              })
        } else {
            setCartItems((prevItems) => [...prevItems, product]);
            alert("Product added successfully!");  
        }
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
