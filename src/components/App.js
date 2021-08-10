import Banner from './Banner'
import Shop from './Shop'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './Cart'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import axios from 'axios';
import { getToken, removeUserSession, setUserSession } from './Common';

function App() {

  const [cart, updateCart] = useState([])

  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 

  return(
    
    <div className="App">

      <Router>
        <Banner />
        <Switch>
          <Route exact path="/shop" component={() => <Shop cart={cart} updateCart={updateCart} />}></Route>
          <Route exact path="/cart" component={() => <Cart cart={cart} updateCart={updateCart} />}></Route>
          <Route exact path="/about" component={() => <About />}></Route>
          <Route exact path="/services" component={() => <Services />}></Route>
          <Route exact path="/contact" component={() => <Contact />}></Route>
          <PublicRoute path="/Login" component={() => <Login/>} />
          <PrivateRoute path="/Dashboard" component={() => <Dashboard/>} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
