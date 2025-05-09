import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ siteName = "SoleMate" }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="site-header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo-container">
                        <Link to="/" className="logo">
                            {siteName}
                        </Link>
                        <p className="tagline">Step into Comfort, Walk in Style</p>
                    </div>

                    <div className="menu-toggle" onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link">Shop</Link>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><Link to="/shop?category=running">Running</Link></li>
                                        <li><Link to="/shop?category=casual">Casual</Link></li>
                                        <li><Link to="/shop?category=athletic">Athletic</Link></li>
                                        <li><Link to="/shop?category=formal">Formal</Link></li>
                                        <li><Link to="/shop?category=basketball">Basketball</Link></li>
                                        <li><Link to="/shop?category=hiking">Hiking</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-icons">
                        <Link to="/account" className="icon-button">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link to="/wishlist" className="icon-button">
                            <i className="fas fa-heart"></i>
                            <span className="badge">0</span>
                        </Link>
                        <Link to="/cart" className="icon-button">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge">0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;