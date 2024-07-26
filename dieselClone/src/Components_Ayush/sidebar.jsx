import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to="/man">MAN</Link>
        </li>
        <li>
          <Link to="/woman">WOMAN</Link>
        </li>
        <li>
          <Link to="/kid">KID</Link>
        </li>
        <li>
          <Link to="/ss24">SS'24</Link>
        </li>
        <li>
          <Link to="/1dr">1DR</Link>
        </li>
        <li>
          <Link to="/sale">SALE</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
