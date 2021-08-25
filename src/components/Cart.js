import { useState, useEffect } from 'react';

function Cart({ cart, updateCart }) {
    const [products, setProducts] = useState(null);
    const [order_items, setOrder_items] = useState('');
    const [owner, setOwner] = useState('');
    const [is_ordered, setIs_ordered] = useState('');

    useEffect(() => {
		getData()
		// we will use async/await to fetch this data
		async function getData() {
			const res = await fetch("https://webshop-api-johnsons.herokuapp.com/api/cartorders/");
			const data = await res.json();

			setProducts(data);
			console.log(data)

			const categories = data.reduce(
		(acc, data) =>
			acc.includes(data.category) ? acc : acc.concat(data.category),
		[]
	)
		}
	}, [])

    const order = {
        owner: owner,
        order_items: order_items,
        is_ordered: is_ordered
      };

    function moreItems(){

    }

    function deleteItems() {

    }

    return (
        <div>
        <h1>Cart</h1>
        
        {/* display products from the API */}
        {products && (
            <div className='itemContainer'>

                {/* loop over the products */}
                {products.map(product => (
                    <div className='item'>
                        <img className='productImg' src={product.imageurl} alt='product'></img>
                        <h2 >{product.title}</h2>
                        <h3> Price : {product.price}€</h3>
                        <button onClick={() => moreItems()}> + </button>
                        <button onClick={() => deleteItems()}>Delete </button>
                    </div>
                ))}

                

            </div>
        )}
    </div>
            )
}

export default Cart