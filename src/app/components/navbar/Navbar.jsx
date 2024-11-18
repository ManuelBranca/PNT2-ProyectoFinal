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
                <Link href={`/`}>Home</Link>
                <Link href={`/pages/products`}>Products</Link>
                <Link href={`/pages/loginForm`}>Login</Link>
                <Link href={`/pages/sales`}>Sales</Link>
                
            </ul>
        </nav>
    );
};


export default Navbar;

