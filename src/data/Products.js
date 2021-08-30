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

	function addToCart(title, price, imageurl, amount) {

		console.log('addToCart')
		const currentproductAdded = cart.find((product) => product.title === title)
		if (currentproductAdded) {
			const cartFiltered = cart.filter(
				(product) => product.title !== title
			)
			updateCart([
				...cartFiltered,
				{ imageurl, title, price, amount: currentproductAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { imageurl, title, price, amount: 1 }])
		}
	
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
					{products.map(({ id, imageurl, title, price, category, amount }) =>
						!activeCategory || activeCategory === category ? (
							<div className='item' key={id}>
								<h2 >{title}</h2>
								<img className='productImg' src={imageurl} alt='product'></img>
								<p>{category}</p>
								<h3> Price : {price}€</h3>
								<button onClick={() => addToCart(title, price, imageurl)}>Add to cart</button>
							</div>
						) : null
					)}
				</ul>

			</div>
		)
	}

export default Products