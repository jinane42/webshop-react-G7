import Banner from './Banner'
import Shop from './Shop'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './Cart'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup'
import Logout from './views/auth/Logout'

function App() {

  const [cart, updateCart] = useState([])

  return(
    
    <div className="App">

      <Router>
        <Banner />
        <Switch>
          <Route exact path="/shop" component={() => <Shop cart={cart} updateCart={updateCart} />}></Route>
          <Route exact path="/cart" component={() => <Cart cart={cart} updateCart={updateCart} />}></Route>
          <Route exact path="/about" component={() => <About />}></Route>
          <Route exact path="/contact" component={() => <Contact />}></Route>
          <Route exact path="/Login" component={() => <Login />}></Route>
          <Route exact path="/Dashboard" component={() => <Dashboard />}></Route>
          <Route exact path='/Signup' component={() => <Signup />}></Route>
          <Route exact path='/Logout' component={() => <Logout />}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
