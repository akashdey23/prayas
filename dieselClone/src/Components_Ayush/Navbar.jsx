import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser, faMagnifyingGlass, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';



const Navbar = () => {
  const [isManSubMenuOpen, setIsManSubMenuOpen] = useState(false);
  const [isWomanSubMenuOpen, setIsWomanSubMenuOpen] = useState(false);
  const [isKidSubMenuOpen, setIsKidSubMenuOpen] = useState(false);
  const [isSS24SubMenuOpen, setIsSS24SubMenuOpen] = useState(false);
  //const [is1DRSubMenuOpen, setIs1DRSubMenuOpen] = useState(false);
  const [isSaleSubMenuOpen, setIsSaleSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleManSubMenuToggle = () => {
    setIsManSubMenuOpen(!isManSubMenuOpen);
  };

  const handleWomanSubMenuToggle = () => {
    setIsWomanSubMenuOpen(!isWomanSubMenuOpen);
  };

  const handleKidSubMenuToggle = () => {
    setIsKidSubMenuOpen(!isKidSubMenuOpen);
  };

  const handleSS24SubMenuToggle = () => {
    setIsSS24SubMenuOpen(!isSS24SubMenuOpen);
  };

  const handle1DRSubMenuToggle = () => {
     setIs1DRSubMenuOpen(!is1DRSubMenuOpen);
  };

  const handleSaleSubMenuToggle = () => {
    setIsSaleSubMenuOpen(!isSaleSubMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <Router>
    <nav className="navbar">
      <ul className="navbar-links">
        <li onMouseEnter={handleManSubMenuToggle} onMouseLeave={handleManSubMenuToggle}>
          <Link to="/man">MAN</Link>
          {isManSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/man/view all">VIEW ALL</Link></li>
              <li><Link to="/man/Jeans">JEANS</Link></li>
              <li><Link to="/man/Apparel">APPAREL</Link></li>
              <li><Link to="/man/footwear">SHOES</Link></li>
              <li><Link to="/man/Accessories">ACCESSORIES</Link></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleWomanSubMenuToggle} onMouseLeave={handleWomanSubMenuToggle}>
          <Link to="/woman">WOMAN</Link>
          {isWomanSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/woman/view all">VIEW ALL</Link></li>
              <li><Link to="/woman/Jeans">JEANS</Link></li>
              <li><Link to="/woman/Apparel">APPAREL</Link></li>
              <li><Link to="/woman/footwear">SHOES</Link></li>
              <li><Link to="/woman/Accessories">ACCESSORIES</Link></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleKidSubMenuToggle} onMouseLeave={handleKidSubMenuToggle}>
          <Link to="/kid">KID</Link>
          {isKidSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/kid/view all">VIEW ALL</Link></li>
              <li><Link to="/kid/Jeans">JEANS</Link></li>
              <li><Link to="/kid/Apparel">APPAREL</Link></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleSS24SubMenuToggle} onMouseLeave={handleSS24SubMenuToggle}>
          <Link to="/ss24">SS'24</Link>
          {isSS24SubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/ss24/view all">VIEW ALL</Link></li>
              <li><Link to="/ss24/man">MAN</Link></li>
              <li><Link to="/ss24/woman">WOMAN</Link></li>
            </ul>
          )}
        </li>
         <li onMouseEnter={handle1DRSubMenuToggle} onMouseLeave={handle1DRSubMenuToggle}>
          <Link to="/1dr">1DR</Link>
        </li>
        <li onMouseEnter={handleSaleSubMenuToggle} onMouseLeave={handleSaleSubMenuToggle}>
          <Link to="/sale">SALE</Link>
          {isSaleSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/sale/view all">VIEW ALL</Link></li>
              <li><Link to="/sale/men">MAN</Link></li>
              <li><Link to="/sale/women">WOMAN</Link></li>
              <li><Link to="/sale/kids">KID</Link></li>
            </ul>
          )}
        </li>
      </ul>
    

    <div className="navbar-logo">
        <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHgTb4EcI0cTeqc5BgBcj-VSYKpMRcSKnNA&s" alt="Diesel Logo" /></Link>
    </div>

      <div className="navbar-icons">
        <ul>
          <li>
            <div className="dropdown" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/dashboard">Account Dashboard</Link></li>
                  <li><Link to="/address-book">My Address Book</Link></li>
                  <li><Link to="/orders">My Orders</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                </ul>
              )}
            </div>
          </li>

          <li><Link to="/searchbar"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></li>

          <li>

            <div className="dropdown" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/Check your order">Check your order</Link></li>
                  <li><Link to="/Return your order">Return your order</Link></li>
                  <li><Link to="/Delivery">Delivery</Link></li>
                  <li><Link to="/Send us a Message">Send us a Message</Link></li>
                  <li><Link to="/Buy Luxe Gift Card">Buy Luxe Gift Card</Link></li>
                  <li><Link to="/View All">View All</Link></li>
                </ul>
              )}
            </div>
          </li>
          
          <li><Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
        </ul>
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
