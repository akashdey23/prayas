import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser, faMagnifyingGlass, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


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
            <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHgTb4EcI0cTeqc5BgBcj-VSYKpMRcSKnNA&s" alt="Diesel Logo" /></Link>
          </div>
         
          <div className="navbar-icons">
            <ul>
              <li><Link to="/dashboard"><FontAwesomeIcon icon={faUser} /></Link></li>
              <li><Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></li>
              <li><Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link></li>
              <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
              <li><Link to="/info"><FontAwesomeIcon icon={faInfoCircle} /></Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Routes>
        <Route exact path="/man" component={Man} />
        <Route exact path="/woman" component={Woman} />
        <Route exact path="/kid" component={Kid} />
        <Route exact path="/ss24" component={SS24} />
        <Route exact path="/1dr" component={OneDR} />
        <Route exact path="/sale" component={Sale} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/search" component={Search} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/cart" component={Cart} />

        {/* Consider adding a catch-all route for unmatched paths */}
        {/* <Route path="*" component={NotFound} /> */}
      {/* </Routes> */}
    </Router>
  );
};

export default Navbar;