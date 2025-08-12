import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ React Router
import './Header.css';
import logo from '../../image/logo.png';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          {/* Thay dấu chấm bằng các route cụ thể nếu cần */}
          <li><Link to="/categories">Categories</Link></li> {/* Giả sử */}
          <li><Link to="/deals">Deals</Link></li> {/* Giả sử */}
          <li><Link to="/contact">Contact</Link></li> {/* Giả sử */}
          <li><Link to="/about">About</Link></li> {/* Giả sử */}
        </ul>
      </nav>

      <input 
        type="text" 
        placeholder="Tìm kiếm sản phẩm..." 
        className="search-bar"
      />

      <div className="checkout">
        <Link to="/checkout">Thanh toán</Link> {/* Thêm Link cho Thanh toán */}
      </div>
    </header>
  );
}

export default Header;