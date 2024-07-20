import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Navbar.css';

import Home from './pages/Home';
import Man from './pages/Man';
import Woman from './pages/Woman';
import Kid from './pages/Kid';
import SS24 from './pages/SS24';
import OneDR from './pages/OneDR';
import Sale from './pages/Sale';
import Dashboard from './pages/Dashboard'; 
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-announcement">
          <p>EOSS Special! Use code "EXTRA10" for addtn.10% Off above Rs 25,000/- (Applicable only on discounted products)</p>
        </div>
        <div className="navbar-main">
          <ul className="navbar-links">
            <li><Link to="/man">MAN</Link></li>
            <li><Link to="/woman">WOMAN</Link></li>
            <li><Link to="/kid">KID</Link></li>
            <li><Link to="/ss24">SS'24</Link></li>
            <li><Link to="/1dr">1DR</Link></li>
            <li><Link to="/sale">SALE</Link></li>
          </ul>
          <div className="navbar-logo">
            <Link to="/"><img src="path/to/your/logo.png" alt="Diesel Logo" /></Link>
          </div>
          <ul className="navbar-icons">
            <li><Link to="/dashboard"><i className="icon-user"></i></Link></li>
            <li><Link to="/search"><i className="icon-search"></i></Link></li>
            <li><Link to="/wishlist"><i className="icon-heart"></i></Link></li>
            <li><Link to="/cart"><i className="icon-cart"></i></Link></li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/man" component={Man} />
        <Route path="/woman" component={Woman} />
        <Route path="/kid" component={Kid} />
        <Route path="/ss24" component={SS24} />
        <Route path="/1dr" component={OneDR} />
        <Route path="/sale" component={Sale} />
        <Route path="/dashboard" component={Dashboard} /> 
        <Route path="/search" component={Search} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Navbar;
