// App.jsx
import React from 'react';
import Navbar from './Components_Ayush/Navbar';
import Login from './Components_Ipsa/Login'; 
import { useState } from 'react'
import Footer from './components_sadiqua/Footer'


const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>


    
      <h1>react project</h1>
      <Login/>
      <Footer/>
    </>
  );
};




export default App;
