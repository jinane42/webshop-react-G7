import { useState, useEffect } from 'react';
import Products from '../data/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function Cart({ cart, updateCart }) {

    const plus = <FontAwesomeIcon icon={faPlusCircle} />
    const minus = <FontAwesomeIcon icon={faMinusCircle} />
    const trash = <FontAwesomeIcon icon={faTrashAlt} />

    const [isOpen, setIsOpen] = useState(true)
    const [product, setProduct] = useState('product');
    const [amount, setAmount] = useState(0);
   
    const closeCart = () => {
        setIsOpen(false)
    }

    const openCart =() => {
        setIsOpen(true)
    }

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

    function increase() {

    }
    function decrease() {

    }
    function remove() {

    }
    const order = {
        product: product,
        quantity: amount,
    }
    function toOrder() {
        console.log(order)

        fetch('https://webshop-api-johnsons.herokuapp.com/api/orderitems/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(order.amount)
                setProduct(order);
                setAmount(order)
            })
    }

    return isOpen ? (
        <div className='cart'>
            <h1>Cart</h1>
            <ul className='cartContainer'>
                {cart.map(({ title, price, amount, imageurl }, index) => (
                    <div className='cartItem'>
                        <img className='productImg' src={imageurl} alt='product'></img>
                        <div className='title' key={`${title}-${index}`} >
                            {title} {price}€ x {amount}
                        </div>
                        <div className='btnCart'>
                            <p className='plus' onClick={() => increase(cart)}>{plus}</p>
                            <p className='minus' onClick={() => decrease(cart)}>{minus}</p>
                            <p className='trash' onClick={() => remove(cart)}>{trash}</p>
                        </div>

                    </div>
                ))}
            </ul>
            <h3>Total :{total}€</h3>
            <button onClick={() => updateCart(0)}> CLEAR </button>
            <button
                onClick={() => closeCart()}>
                Close the cart
            </button>
            <button
                onClick={() => toOrder()}>
                Confirm your order
            </button>
        </div>
    ) : (
        <div>
            <button
                onClick={() => openCart()}>
                Open the cart
            </button>
        </div>
    )
}

export default Cart