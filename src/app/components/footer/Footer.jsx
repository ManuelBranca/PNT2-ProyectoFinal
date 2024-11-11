import React from "react";
import './footer.css';
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>My App</h2>
                        <p>Connecting people and ideas around the world.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href={`/home`}>Home</Link></li>
                            <li><Link href={`/pages/products`}>Products</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section social-media">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 My App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
