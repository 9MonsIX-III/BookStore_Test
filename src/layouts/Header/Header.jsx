import React from 'react';
import './Header.css';
import logo from "../../image/logo.png";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      
      <nav>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </nav>

      <input 
        type="text" 
        placeholder="Tìm kiếm sách..." 
        className="search-bar"
      />

      <div className="checkout">Thanh toán</div>
    </header>
  );
}

export default Header;