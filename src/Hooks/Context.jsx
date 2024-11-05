// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();
// Local storage e cart  store korar jonno
export const CartProvider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    // Local storage e wishList  store korar jonno
    const [wishlistitem, setWishlistItem] = useState(() => {
        const storedWishList = localStorage.getItem('wishList');
        return storedWishList ? JSON.parse(storedWishList) : [];
    });
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishlistitem));
    }, [wishlistitem]);

// cart button e click korle local e search korbe and local e store korbe
    const addToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.product_id === product.product_id);

        if (isProductInCart) {
            toast.warning('Already added the item!',{
                position:'top-center',
                autoClose:1200
              })
        } else {
            setCartItems((prevItems) => [...prevItems, product]);
            toast.success('Add cart added Sucess!',{
                position:'top-center',
                autoClose:1200
              })
        }
    };
    const addToWishList = (wishList) => {
        const isWishListCart = wishlistitem.some(data => data.product_id === wishList.product_id);
        if(isWishListCart){
            toast.warning('Already added the item!',{
                position:'top-center',
                autoClose:1200
              })
        }else{
            setWishlistItem((prevItem)=> [...prevItem,wishList])
            toast.success('WishList added Sucess!',{
                position:'top-center',
                autoClose:1200
              })
        }
    }
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.product_id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    };
    const removeFromwish = (id) => {
        const updatedCart = wishlistitem.filter(item => item.product_id !== id);
        setWishlistItem(updatedCart);
        localStorage.setItem('wishList', JSON.stringify(updatedCart)); 
    };

    const cartCount = cartItems.length;
    const wishListCount = wishlistitem.length;

    return (
        <CartContext.Provider value={{ cartItems,wishListCount, wishlistitem, addToCart, addToWishList, cartCount, removeFromCart,removeFromwish}}>
            {children}
        </CartContext.Provider>
    );
};
