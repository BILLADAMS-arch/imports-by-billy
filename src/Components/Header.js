// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1>Imports by Billy</h1>
        <nav>
          <ul>
            <li><Link to="/" className="nav-btn">Home</Link></li>
            <li><Link to="/cars" className="nav-btn">Cars</Link></li>
            <li><Link to="/import-process" className="nav-btn">Import Process</Link></li>
            <li><Link to="/spare-parts" className="nav-btn">Spare Parts</Link></li>
            <li><Link to="/contact" className="nav-btn">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
