import { useEffect } from 'react'

function Cart({ cart, updateCart }) {
    
    const total = cart.reduce(
        (acc, itemType) => acc + itemType.amount * itemType.price,
        0
    )
    const LOCAL_STORAGE_KEY = 'G7.cart'
   

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (cart) updateCart(cart)
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}

            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart(0)}> Vider le panier</button>
        </div>
    )
}

export default Cart