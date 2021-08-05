import '../style/Item.css'

function Item({ id, cover, name}) {
	return (
		<li key={id} className="mainContainer" >
			<img  src={cover} alt={`${name} cover`} />
            <p>{name}</p>
		</li>
	)
}
export default Item
