import { useState, useEffect } from 'react';

function CapList() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getData()


		// we will use async/await to fetch this data
		async function getData() {
			const res = await fetch("https://webshop-api-johnsons.herokuapp.com/api/products/");
			const data = await res.json();

			// store the data into our books variable
			setProducts(data);
		}
	}, [])
	return (
		<div>
			<h1>Products</h1>

			{/* display products from the API */}
			{products && (
				<div >

					{/* loop over the products */}
					{products.map((id, title) => (
						<div key={id}>
							<h2>{title}</h2>
						</div>
					))}

				</div>
			)}
		</div>
	)
}

export default CapList