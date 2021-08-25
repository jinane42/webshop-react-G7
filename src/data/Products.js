import { useState, useEffect } from 'react';
import Categories from '../components/Categories'

function CapList({ cart, updateCart }) {
	const [products, setProducts] = useState(null);

	const [activeCategory, setActiveCategory] = useState('')
	
	
	useEffect(() => {
		getData()
		// we will use async/await to fetch this data
		async function getData() {
			const res = await fetch("https://webshop-api-johnsons.herokuapp.com/api/products/");
			const data = await res.json();

			// store the data into our books variable
			setProducts(data);
			console.log(data)

			const categories = data.reduce(
		(acc, data) =>
			acc.includes(data.category) ? acc : acc.concat(data.category),
		[]
	)
		}
	}, [])

	
	function addToCart(title, price) {
		const currentItemAdded = cart.find((item) => item.title === title)
		if (currentItemAdded) {
			const cartFiltered = cart.filter(
				(item) => item.title !== title
			)
			updateCart([
				...cartFiltered,
				{ title, price, amount: currentItemAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { title, price, amount: 1 }])
		}
	}

	return (
		<div>
			<h1>Products</h1>
			
			{/* display products from the API */}
			{products && (
				<div className='itemContainer'>

					{/* loop over the products */}
					{products.map(product => (
						<div className='item'>
							<img className='productImg' src={product.imageurl} alt='product'></img>
							<h2 >{product.title}</h2>
							<h3> Price : {product.price}€</h3>
							<button onClick={() => addToCart()}>Add to cart</button>
						</div>
					))}

				</div>
			)}
		</div>
	)
}

export default CapList