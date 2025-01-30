import React from "react";
import './footer.css';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>e-Commerce</h2>
                        <p>Conectando personas e ideas en todo el mundo.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li><Link href={`/`}>Inicio</Link></li>
                            <li><Link href={`/pages/products`}>Productos</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section social-media">
  <h3>Síguenos</h3>
  <div className="social-links">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f">FB</i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter">TW</i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram">IG</i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in">LN</i>
    </a>
  </div>
</div>

                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
