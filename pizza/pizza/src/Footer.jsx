import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="global-footer">
            <div className="footer-container">
                <div className="footer-section brand-section">
                    <h4 className="footer-brand-title">🍕 Pizza Hub</h4>
                    <p className="footer-desc">Delivering the best wood-fired pizzas in town since 2010. Taste the authentic Italian flavors right at your doorstep.</p>
                </div>

                <div className="footer-section links-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Our Menu</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section contact-info">
                    <h4 className="footer-heading">Get in Touch</h4>
                    <p>📍 123 Pizza Street, Foodville</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>✉️ hello@pizzahub.com</p>
                </div>

                <div className="footer-section social-section">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">📷</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">📘</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">🐦</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">📺</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© 2024 Pizza Hub. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
