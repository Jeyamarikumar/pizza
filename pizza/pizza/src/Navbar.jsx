import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="global-navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-brand">
                    🍕 Pizza Hub
                </NavLink>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            Menu
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
