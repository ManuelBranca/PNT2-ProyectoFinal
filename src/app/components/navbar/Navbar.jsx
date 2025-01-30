import React from "react";
import './navbar.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href={`/`}><h1>e-Commerce</h1></Link>
            </div>
            <ul className="navbar-links">
                <Link href={`/`}>Inicio</Link>
                <Link href={`/pages/products`}>Productos</Link>
                <Link href={`/pages/loginForm`}>Iniciar Sesión</Link>
                <Link href={`/pages/sales`}>Ventas</Link>
                {/* 
<li className="dropdown">
    <a href="#sales" className="dropbtn">Ventas</a>
    <div className="dropdown-content">
        <a href="#reports">Informes</a>
        <a href="#performance">Desempeño</a>
    </div>
</li>
*/}

            </ul>
        </nav>
    );
};

export default Navbar;
