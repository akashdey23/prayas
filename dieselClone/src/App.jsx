// App.jsx
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components_Ayush/Navbar';
import Login from './Components_Ipsa/Login';
import Footer from './components_sadiqua/Footer'
import { Wishlist } from './Components_Ipsa/Wishlist';
import { Cart } from './Components_Ipsa/Cart';
import Overlay from './Components_Jaydip/Overlay';
import Gallery from './components_sadiqua/Gallery';
import Dashboard from './Components_Ayush/pages/dasboard';
import Kid from './Components_Ayush/pages/Kid';
import Man from './Components_Ayush/pages/Man';
import SS24 from './Components_Ayush/pages/SS24';
import Woman from './Components_Ayush/pages/Woman';
import Indprod from './Components_Arjit/Indprod';
// import Cart from './Components_Ipsa/Cart';
// import Login from './Components_Ipsa/Login';
// import Wishlist from './Components_Ipsa/Wishlist';
//Imports of object from Ipsa

g
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
      {/* <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/> */}
      {/* Routes for pages from Ipsa */}
      </Routes>
    </Router>
      <Login/>
      <Wishlist/>
      <Cart/>
      <Gallery/>
      <Footer/>
    </>
  );
};




export default App;
