import { useState, useEffect } from 'react';
import Categories from '../components/Categories'

function Products({ cart, updateCart }) {
	
	const [products, setProducts] = useState([])
	useEffect(() => {
		getData()
		// we will use async/await to fetch this data
		async function getData() {
			const res = await fetch("https://webshop-api-johnsons.herokuapp.com/api/products/");
			const data = await res.json();

			// store the data into our books variable
			setProducts(data);
			console.log(data)

		}
	}, [])

	const [activeCategory, setActiveCategory] = useState('')

	const categories = products.reduce(
		(acc, product) =>
			acc.includes(product.category) ? acc : acc.concat(product.category),
		[]
	)

	function addToCart(title, price) {
		console.log('hello')
		const currentproductAdded = cart.find((product) => product.title === title)
		if (currentproductAdded) {
			const cartFiltered = cart.filter(
				(product) => product.title !== title
			)
			updateCart([
				...cartFiltered,
				{ title, price, amount: currentproductAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { title, price, amount: 1 }])
		}
		console.log(currentproductAdded)
	}

	return (
		<div>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<h1>Products</h1>
			<ul className="itemContainer">
				{products.map(({ id, imageurl, title, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<img className='productImg' src={imageurl} alt='product'></img>
							<h2 >{title}</h2>
							<h3> Price : {price}€</h3>
							<button onClick={() => addToCart(title, price)}>Add to cart</button>
						</div>
					) : null
				)}
			</ul>

		</div>
	)
}

export default Products