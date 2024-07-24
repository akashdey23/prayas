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
