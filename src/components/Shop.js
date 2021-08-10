import CapList from '../data/CapList'
import Item from './Item'
import '../style/Shop.css'

function Shop({ cart, updateCart }) {

    function addToCart(name, price) {
        const currentItemAdded = cart.find((item) => item.name === name)
        if (currentItemAdded) {
            const cartFilteredCurrentItem = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentItem,
                { name, price, amount: currentItemAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <ul className="itemContainer">
            <CapList/>
           
        </ul>
    )
}

export default Shop