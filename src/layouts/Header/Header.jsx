    import React from 'react';
    import './Header.css';
    import logo from "../../image/logo.png";

    function Header() {
    return (
        <header>
        <img src={logo} alt="logo" />
        <nav>
            <ul>
            <li>Trang chủ</li>
            <li>Sách</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            </ul>
        </nav>
        <div>Thanh toán</div>
        </header>
    );
    }

    export default Header;