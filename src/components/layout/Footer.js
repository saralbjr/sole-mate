import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* About */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">SHOME</h5>
                        <p className="mb-3">We provide the best home furniture and accessories for your space. Explore our collection and transform your home.</p>
                        <div className="d-flex">
                            <a href="https://facebook.com" className="me-2 text-light"><FaFacebookF /></a>
                            <a href="https://twitter.com" className="me-2 text-light"><FaTwitter /></a>
                            <a href="https://instagram.com" className="me-2 text-light"><FaInstagram /></a>
                            <a href="https://pinterest.com" className="me-2 text-light"><FaPinterestP /></a>
                            <a href="https://youtube.com" className="text-light"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="text-light">Home</Link></li>
                            <li className="mb-2"><Link to="/shop" className="text-light">Shop</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-light">About Us</Link></li>
                            <li className="mb-2"><Link to="/blog" className="text-light">Blog</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-light">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Account</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/account" className="text-light">My Account</Link></li>
                            <li className="mb-2"><Link to="/cart" className="text-light">Shopping Cart</Link></li>
                            <li className="mb-2"><Link to="/wishlist" className="text-light">Wishlist</Link></li>
                            <li className="mb-2"><Link to="/checkout" className="text-light">Checkout</Link></li>
                            <li className="mb-2"><Link to="/login" className="text-light">Login/Register</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">Newsletter</h5>
                        <p className="mb-3">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" />
                                <button className="btn btn-primary" type="submit">Subscribe</button>
                            </div>
                        </form>
                        <p className="small">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>

                <hr className="my-4 bg-secondary" />

                {/* Bottom Footer */}
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Shome. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <img src="https://via.placeholder.com/200x30" alt="Payment Methods" className="img-fluid" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;