import { useState, useEffect } from 'react';
import Products from '../data/Products';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts] = useState([]);
    const [order_items, setOrder_items] = useState('');
    const [owner, setOwner] = useState('');
    const [is_ordered, setIs_ordered] = useState('');
    console.log(cart)

    const total = cart.reduce(
        (acc, products) => acc + products.amount * products.price,
        0
    );
    const LOCAL_STORAGE_KEY = 'LMJ.cart'

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (cart) updateCart(cart)
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
    }, [cart])

    const order = {
        owner: owner,
        order_items: order_items,
        is_ordered: is_ordered
    };

    function increase() {


    }
    function decrease() {

    }
    function remove() {

    }

    return isOpen ? (
        <div className='cart'>
            <h1>Cart</h1>
            <ul className='itemContainer'>
                {cart.map(({ title, price, amount, imageurl }, index) => (
                    <div className='item'>
                        <img className='productImg' src={imageurl} alt='product'></img>
                        <div key={`${title}-${index}`} >
                            {title} {price}€ x {amount}
                        </div>
                        <div>
                            <button onClick={() => increase(cart)}>
                                +
                            </button>

                            {
                                cart.amount > 1 &&
                                <button onClick={() => decrease(cart)}>
                                    -
                                </button>
                            }

                            {
                                cart.amount === 1 &&
                                <button onClick={() => remove(cart)}>
                                    Trash
                                </button>
                            }
                        </div>

                    </div>
                ))}
            </ul>
            <button onClick={() => updateCart(0)}> Vider le panier</button>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}>
                Fermer le panier
            </button>
            <h3>Total :{total}€</h3>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart