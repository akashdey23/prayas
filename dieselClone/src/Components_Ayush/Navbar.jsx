import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faUser, faMagnifyingGlass, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Announcement = () => {
  const [announcementText, setAnnouncementText] = useState([
    "EOSS Special! Use code 'EXTRA10' for addtn. 10% off above Rs 25,000/- (Applicable only on discounted products)",
    "Track your Orders & Returns here"
  ]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcementText.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [announcementText.length]);

  return (
    <div className="navbar-container">
    <div className="announcement-section">
      <p>{announcementText[currentAnnouncement]}</p>
    </div>
  </div>
  );
};


const Navbar = () => {
  const [isManSubMenuOpen, setIsManSubMenuOpen] = useState(false);
  const [isWomanSubMenuOpen, setIsWomanSubMenuOpen] = useState(false);
  const [isKidSubMenuOpen, setIsKidSubMenuOpen] = useState(false);
  const [isSS24SubMenuOpen, setIsSS24SubMenuOpen] = useState(false);
  const [is1DRSubMenuOpen, setIs1DRSubMenuOpen] = useState(false);
  const [isSaleSubMenuOpen, setIsSaleSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJeansDropdownOpen, setIsJeansDropdownOpen] = useState(false);
  const [isApparelDropdownOpen, setIsApparelDropdownOpen] = useState(false);
  const [isShoesDropdownOpen, setIsShoesDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] = useState(false);

  const handleManSubMenuToggle = () => {
    setIsManSubMenuOpen(!isManSubMenuOpen);
  };
  const handleJeansDropdownToggle = () => {
    setIsJeansDropdownOpen(!isJeansDropdownOpen); 
  };
  const handleApparelDropdownToggle = () => {
    setIsApparelDropdownOpen(!isApparelDropdownOpen); 
  };
  const handleShoesDropdownToggle = () => {
    setIsShoesDropdownOpen(!isShoesDropdownOpen); 
  };
  const handleAccessoriesDropdownToggle = () => {
    setIsAccessoriesDropdownOpen(!isAccessoriesDropdownOpen); 
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
              <li><Link to="/man/Jeans">JEANS
              <FontAwesomeIcon icon={faAngleDown} onClick={handleJeansDropdownToggle} />
              </Link>
              {isJeansDropdownOpen && (
               <ul className="sub-sub-menu"> 
               <li><Link to="/man/Jeans/all Jeans">All Jeans</Link></li>
               <li><Link to="/man/Jeans/Diesel Library">Diesel Library</Link></li>
               <li><Link to="/man/Jeans/Jogg Jeans">Jogg Jeans</Link></li>
               <li><Link to="/man/Jeans/skinny">SKINNY</Link></li>
               <li><Link to="/man/Jeans/slim">SLIM</Link></li>
               <li><Link to="/man/Jeans/straight">STRAIGHT</Link></li>
               <li><Link to="/man/Jeans/Tapered">TAPERED</Link></li>
               <li><Link to="/man/Jeans/BootCut">BOOTCUT</Link></li>
             </ul>
           )} 
              </li>

              <li><Link to="/man/Apparel">APPAREL
              <FontAwesomeIcon icon={faAngleDown} onClick={handleApparelDropdownToggle} />
              </Link>
              {isApparelDropdownOpen && (
              <ul className="sub-sub-menu"> 
              <li><Link to="/man/Apparel/all apparel">All Apparel</Link></li>
              <li><Link to="/man/Apparel/t-shirts">T-Shirts</Link></li>
              <li><Link to="/man/Apparel/tops">Tops</Link></li>
              <li><Link to="/man/Apparel/shirts">Shirts</Link></li>
              <li><Link to="/man/Apparel/jackets">Jackets</Link></li>
              <li><Link to="/man/Apparel/Sweaters & Knitwears">Sweaters & Knitwears</Link></li>
              <li><Link to="/man/Apparel/dresses">Dresses</Link></li>
              <li><Link to="/man/Apparel/lounge wear">Loungewear</Link></li>
              <li><Link to="/man/Apparel/skirts">Skirts</Link></li>
              <li><Link to="/man/Apparel/Bottom wear">Bottomwear</Link></li>
            </ul>
           )} 
              </li>
              <li><Link to="/man/shoes">SHOES
              <FontAwesomeIcon icon={faAngleDown} onClick={handleShoesDropdownToggle} />
              </Link>
              {isShoesDropdownOpen && (
                 <ul className="sub-sub-menu"> 
                 <li><Link to="/man/Shoes/all shoes">All Shoes</Link></li>
                 <li><Link to="/man/Shoes/sneakers">Sneakers</Link></li>
                 <li><Link to="/man/Shoes/sandals">Sandals</Link></li>
                 <li><Link to="/man/Shoes/pumps">Pumps</Link></li>
               </ul>
              )} 
              </li>

              <li><Link to="/man/Accessories">ACCESSORIES
              <FontAwesomeIcon icon={faAngleDown} onClick={handleAccessoriesDropdownToggle} />
              </Link>
              {isAccessoriesDropdownOpen && (
               <ul className="sub-sub-menu"> 
               <li><Link to="/man/Accessories/all Accessories">All Accessories</Link></li>
               <li><Link to="/man/Accessories/bags">Bags</Link></li>
               <li><Link to="/man/Accessories/belts">Belts</Link></li>
               <li><Link to="/man/Accessories/wallets">Wallets</Link></li>
             </ul>
            )}  
              </li>
            </ul>
          )}
        </li>

        <li onMouseEnter={handleWomanSubMenuToggle} onMouseLeave={handleWomanSubMenuToggle}>
          <Link to="/woman">WOMAN</Link>
          {isWomanSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/woman/view all">VIEW ALL</Link></li>
              <li><Link to="/woman/Jeans">JEANS
              <FontAwesomeIcon icon={faAngleDown} onClick={handleJeansDropdownToggle} />
              </Link>
              {isJeansDropdownOpen && (
               <ul className="sub-sub-menu"> 
               <li><Link to="/woman/Jeans/all Jeans">All Jeans</Link></li>
               <li><Link to="/woman/Jeans/Diesel Library">Diesel Library</Link></li>
               <li><Link to="/woman/Jeans/Jogg Jeans">Jogg Jeans</Link></li>
               <li><Link to="/woman/Jeans/super-skinny">SUPPER SKINNY</Link></li>
               <li><Link to="/woman/Jeans/skinny">SKINNY</Link></li>
               <li><Link to="/woman/Jeans/slim">SLIM</Link></li>
               <li><Link to="/woman/Jeans/boyfriend">BOYFRIEND</Link></li>
               <li><Link to="/woman/Jeans/straight">STRAIGHT</Link></li>
               <li><Link to="/woman/Jeans/Tapered">TAPERED</Link></li>
               <li><Link to="/woman/Jeans/BootCut&Flare">BOOTCUT & FLARE</Link></li>
             </ul>
           )} 
              </li>

              <li><Link to="/woman/Apparel">APPAREL
              <FontAwesomeIcon icon={faAngleDown} onClick={handleApparelDropdownToggle} />
              </Link>
              {isApparelDropdownOpen && (
              <ul className="sub-sub-menu"> 
              <li><Link to="/woman/Apparel/all apparel">All Apparel</Link></li>
              <li><Link to="/woman/Apparel/t-shirts">T-Shirts</Link></li>
              <li><Link to="/woman/Apparel/tops">Tops</Link></li>
              <li><Link to="/woman/Apparel/shirts">Shirts</Link></li>
              <li><Link to="/woman/Apparel/jackets">Jackets</Link></li>
              <li><Link to="/woman/Apparel/Sweaters & Knitwears">Sweaters & Knitwears</Link></li>
              <li><Link to="/woman/Apparel/dresses">Dresses</Link></li>
              <li><Link to="/woman/Apparel/lounge wear">Loungewear</Link></li>
              <li><Link to="/woman/Apparel/skirts">Skirts</Link></li>
              <li><Link to="/woman/Apparel/Bottom wear">Bottomwear</Link></li>
            </ul>
           )}
              </li>
              
              <li><Link to="/woman/footwear">SHOES
              <FontAwesomeIcon icon={faAngleDown} onClick={handleShoesDropdownToggle} />
              </Link>
              {isShoesDropdownOpen && (
                 <ul className="sub-sub-menu"> 
                 <li><Link to="/woman/Shoes/all shoes">All Shoes</Link></li>
                 <li><Link to="/woman/Shoes/sneakers">Sneakers</Link></li>
                 <li><Link to="/woman/Shoes/sandals">Sandals</Link></li>
                 <li><Link to="/woman/Shoes/pumps">Pumps</Link></li>
               </ul>
              )} 
              </li>
              

              <li><Link to="/woman/Accessories">ACCESSORIES
              <FontAwesomeIcon icon={faAngleDown} onClick={handleAccessoriesDropdownToggle} />
              </Link>
              {isAccessoriesDropdownOpen && (
               <ul className="sub-sub-menu"> 
               <li><Link to="/man/Accessories/all Accessories">All Accessories</Link></li>
               <li><Link to="/man/Accessories/bags">Bags</Link></li>
               <li><Link to="/man/Accessories/belts">Belts</Link></li>
               <li><Link to="/man/Accessories/wallets">Wallets</Link></li>
             </ul>
            )}  
              </li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleKidSubMenuToggle} onMouseLeave={handleKidSubMenuToggle}>
          <Link to="/kid">KID</Link>
          {isKidSubMenuOpen && (
            <ul className="sub-menu">
              <li><Link to="/kid/view all">VIEW ALL</Link></li>
              <li><Link to="/kid/Jeans">JEANS
              <FontAwesomeIcon icon={faAngleDown} onClick={handleJeansDropdownToggle} />
              </Link>
              {isJeansDropdownOpen && (
               <ul className="sub-sub-menu"> 
               <li><Link to="/kid/Jeans/all Jeans">All Jeans</Link></li>
             </ul>
           )} 
              </li>

              <li><Link to="/kid/Apparel">APPAREL
              <FontAwesomeIcon icon={faAngleDown} onClick={handleApparelDropdownToggle} />
              </Link>
              {isApparelDropdownOpen && (
              <ul className="sub-sub-menu"> 
              <li><Link to="/woman/Apparel/all apparel">All Apparel</Link></li>
              <li><Link to="/woman/Apparel/t-shirts">T-Shirts</Link></li>
              <li><Link to="/woman/Apparel/shirts">Shirts</Link></li>
              <li><Link to="/woman/Apparel/jackets">Jackets</Link></li>
              <li><Link to="/woman/Apparel/Sweaters & Knitwears">Sweaters & Knitwears</Link></li>
              <li><Link to="/woman/Apparel/Bottom wear">Bottomwear</Link></li>
            </ul>
           )}
              </li>
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
              <Link to={"/Login"}><FontAwesomeIcon icon={faUser} /></Link>
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
          
          <li><Link to="/Wishlist"><FontAwesomeIcon icon={faHeart} /></Link></li>
          <li><Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
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
