import '../style/Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Banner() {
    const cartIcon=<FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='mainContainer'>
            <h1 className='bannerTitle'>G7</h1>
            <nav class="style-3">
                <ul class="menu-3">
                    <Link to="/shop" >
                        <li className='black'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='black'>About</li>
                    </Link>
                    <Link to="/services">
                        <li className='black'>Services</li>
                    </Link>
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