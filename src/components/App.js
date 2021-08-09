import Banner from './Banner'
import Shop from './Shop'
import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Cart from './Cart'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Dashboard from './Dashboard';
import Preferences from './Preferences';
import Login from './Login';
import useToken from './useToken';

function App() {

  const [cart, updateCart] = useState([])
  const { token, setToken } = useToken();

 
  return token ? (
    <Login setToken={setToken} />
  ) : (
    <div className="App">
      
      <Router>
        <Banner />
        <Switch>
          <Route exact path="/shop" component={() => <Shop cart={cart} updateCart={updateCart} />}></Route>
          <Route exact path="/cart" component={() => <Cart cart={cart} updateCart={updateCart}/>}></Route>
          <Route exact path="/about" component={ () => <About />}></Route>
          <Route exact path="/services" component={() => <Services/>}></Route>
          <Route exact path="/contact" component={() => <Contact/>}></Route>
          <Route exact path="/dashboard" component={() => <Dashboard />}></Route>
          <Route exact path="/preferences" component={() => <Preferences />}></Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
