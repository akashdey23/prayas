// App.jsx
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components_Ayush/Navbar';
import Login from './Components_Ipsa/Login';
import Footer from './components_sadiqua/Footer'
import { Wishlist } from './Components_Ipsa/Wishlist';
import { Cart } from './Components_Ipsa/Cart';
import Overlay from './Components_Jaydip/Overlay';

const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
      </Routes>
    </Router>
=======


    

>>>>>>> 1ff284e661cfe88baea9cdbba717afec2ebe6664
      <Login/>
      <Wishlist/>
      <Cart/>
      <Footer/>
    </>
  );
};




export default App;
