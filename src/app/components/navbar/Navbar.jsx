import React from "react";
import './navbar.css';
/*
completar mejor el enrutamiento a productos, usuarios y ventas
*/
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="././pages/products/Product">Products</a></li>
                <li><a href="././pages/users/User">Users</a></li>
                <li><a href="././pages/sales/Sale">Sales</a></li>
            </ul>
            <ul className="registrer">
            <li><a href="./loginForm/Login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;