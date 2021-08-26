import Products from '../data/Products'
import { useState, useEffect } from 'react';
import '../style/Shop.css'
import Cart from './Cart'

function Shop() {
    const savedCart = localStorage.getItem("cart");
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <ul >
            <Cart cart={cart} updateCart={updateCart} />
            <Products cart={cart} updateCart={updateCart} />
            
        </ul>
    )
}

export default Shop