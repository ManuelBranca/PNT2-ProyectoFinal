import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>MyApp</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li className="dropdown">
                    <a href="#users" className="dropbtn">Users</a>
                    <div className="dropdown-content">
                        <a href="#profile">Profile</a>
                        <a href="#settings">Settings</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#sales" className="dropbtn">Sales</a>
                    <div className="dropdown-content">
                        <a href="#reports">Reports</a>
                        <a href="#performance">Performance</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
