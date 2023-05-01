import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <div className="logo">E Commerce Website</div>
      {isLoggedIn && (
        <div className="search-bar">
          <input type="text" placeholder="Search products" />
          <button>Search</button>
        </div>
      )}
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        {isLoggedIn ? (
          <li>
            <a href="/account">Account</a>
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/cart">Cart</a>
          </li>
        )}
      </ul>
    </nav>
  );
}




export default Navbar;
