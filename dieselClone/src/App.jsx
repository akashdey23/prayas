// App.jsx
import React from 'react';
import Navbar from './Components_Ayush/Navbar';
import Login from './Components_Ipsa/Login';
import Footer from './components_sadiqua/Footer'
import { Wishlist } from './Components_Ipsa/Wishlist';
import { Cart } from './Components_Ipsa/Cart';


const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>


    
      <h1>react project</h1>
      <Login/>
      <Wishlist/>
      <Cart/>
      <Footer/>
    </>
  );
};




export default App;
