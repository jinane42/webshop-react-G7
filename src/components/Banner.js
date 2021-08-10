import '../style/Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Banner() {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='mainContainer'>
            <h1 className='bannerTitle'>G7</h1>
            <nav className="style-3">
                <ul className="menu-3">
                    <NavLink exact activeClassName="active" to="/shop"><li className='black'>Home</li></NavLink>
                    <NavLink activeClassName="active" to="/login"><li className='black'>Login</li></NavLink>
                    <NavLink activeClassName="active" to="/dashboard"><li className='black'>Dashboard</li></NavLink>
                   
                    <Link to="/contact">
                        <li className='black'>Contact</li>
                    </Link>
                </ul>
            </nav>
            <Link to="/cart">
                <button className="Cart" >
                    {cartIcon}
                </button>
            </Link>

        </div>
    )
}

export default Banner