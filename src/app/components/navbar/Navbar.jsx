import React from "react";
import './navbar.css';
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href={`/`}><h1>MyApp</h1></Link>
            </div>
            <ul className="navbar-links">
                <Link href={`/`}>home</Link>
                <Link href={`/pages/products`}>products</Link>
                <Link href={`/pages/loginForm`}>Login</Link>
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

