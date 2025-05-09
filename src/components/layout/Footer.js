import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ siteName = "SoleMate" }) => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {/* About */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget about-widget">
                                <h4 className="widget-title">{siteName}</h4>
                                <p>
                                    We're dedicated to helping you find the perfect shoes for every occasion.
                                    Quality, comfort, and style are at the heart of everything we do.
                                </p>
                                <div className="social-links">
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Shop</h4>
                                <ul className="footer-menu">
                                    <li><Link to="/shop?category=running">Running Shoes</Link></li>
                                    <li><Link to="/shop?category=casual">Casual Shoes</Link></li>
                                    <li><Link to="/shop?category=athletic">Athletic Shoes</Link></li>
                                    <li><Link to="/shop?category=formal">Formal Shoes</Link></li>
                                    <li><Link to="/shop?category=hiking">Hiking Boots</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Information */}
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Information</h4>
                                <ul className="footer-menu">
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Newsletter</h4>
                                <p>Sign up for our newsletter to receive updates on new arrivals, special offers, and exclusive content.</p>
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Your email address" required />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copyright">
                                &copy; {new Date().getFullYear()} {siteName}. All Rights Reserved.
                            </p>
                        </div>
                        {/* <div className="col-md-6">
                            <ul className="footer-bottom-links">
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                                <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;