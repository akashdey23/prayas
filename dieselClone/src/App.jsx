// App.jsx
import React from 'react';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components_Ayush/Navbar';
// import Login from './Components_Ipsa/Login';
import Footer from './components_sadiqua/Footer'
// import { Wishlist } from './Components_Ipsa/Wishlist';
// import { Cart } from './Components_Ipsa/Cart';
import Overlay from './Components_Jaydip/Overlay';
import Gallery from './components_sadiqua/Gallery';
import Dashboard from './Components_Ayush/pages/dasboard';
import Kid from './Components_Ayush/pages/Kid';
import Man from './Components_Ayush/pages/Man';
import SS24 from './Components_Ayush/pages/SS24';
import Woman from './Components_Ayush/pages/Woman';
import Indprod from './Components_Arjit/Indprod';
import Cart1 from './Components_Ipsa/Cart';
import Login1 from './Components_Ipsa/Login';
import Wishlist1 from './Components_Ipsa/Wishlist';
import Searchbar from './Components_Ayush/searchbar'
import './App.css'
import M_Jeans from './Components_Akash/M_Jeans';
import F_Jeans from './Components_Akash/F_Jeans';
import Footwears from './Components_Akash/Footwears';
import M_Underwears from './Components_Akash/M_Underwear';
import M_Topwears from './Components_Akash/M_Topwears';
import F_Topwears from './Components_Akash/F_Topwears';
import Glasses from './Components_Akash/Glasses';
import F_Purse from './Components_Akash/F_Bag';
import Watch from './Components_Akash/Watch';

const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>

    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/Kid" element={<Kid/>}/>
      <Route path="/Man" element={<Man/>}/>
      <Route path="/SS24" element={<SS24/>}/>
      <Route path="/Woman" element={<Woman/>}/>
      <Route path="/Indprod" element={<Indprod/>}/>
      <Route path="/Cart" element={<Cart1/>}/>
      <Route path="/Login" element={<Login1/>}/>
      <Route path="/Wishlist" element={<Wishlist1/>}/>
      <Route path="/searchbar" element={<Searchbar/>}/>
      {/* Routes for pages from Ipsa */}
      </Routes>
    </Router>
      <div className='slider12'>
        <M_Jeans/>
        
      </div>
      <br />
      <div className='slider12'>
        <F_Jeans/>  
      </div>
      <br />
      <div className='slider12'>
        <Footwears/>  
      </div>
      <br />
      <div className='slider12'>
        <M_Underwears />  
      </div>
      <br />
      <div className='slider12'>
        <M_Topwears />  
      </div>
      <br />
      <div className='slider12'>
        <F_Topwears />  
      </div>
      <br />
      <div className='slider12'>
        <Glasses />  
      </div>
      <br />
      <div className='slider12'>
        <F_Purse />  
      </div>
      <br />
      <div className='slider12'>
        <Watch />  
      </div>
      <br />
      <Gallery/>
      <Footer/>
    </>
  );
};




export default App;
