import '../style/Banner.css'
import React, { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Banner() {

    const [isAuth, setIsAuth] = useState(false);

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(false);
        }
    }, []);

    return (
        <div className='mainContainer'>
            <h1 className='bannerTitle'>G7</h1>
            <nav className="style-3">
                <ul className="menu-3">
                    {isAuth === true ? (
                        <Fragment>
                            <Link to="/shop"><li className='black'>Home</li></Link>
                            <Link to="/Logout"><li className='black'>Logout</li></Link>
                            <Link to="/dashboard"><li className='black'>Dashboard</li></Link>
                            <Link to="/contact"><li className='black'>Contact</li></Link>
                        </Fragment>

                    ) : (
                        <Fragment>
                            <Link to="/shop"><li className='black'>Home</li></Link>
                            <Link to="/Login"><li className='black'>Login</li></Link>
                            <Link to="/Signup"><li className='black'>Signup</li></Link>
                            <Link to="/contact"><li className='black'>Contact</li></Link>
                        </Fragment>
                    )}
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