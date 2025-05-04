import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a Navbar.css

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Girl Talk 💬</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/messages">Messages</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

