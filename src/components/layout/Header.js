import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${searchQuery}`);
        }
    };

    return (
        <header>
            {/* Top Header */}
            <div className="bg-dark text-light py-2">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <span className="me-3"><i className="fas fa-phone-alt"></i> +1 234 567 890</span>
                            <span><i className="fas fa-envelope"></i> info@shome.com</span>
                        </div>
                        <div className="col-md-4 text-end">
                            <Link to="/login" className="text-light me-3">Login</Link>
                            <Link to="/register" className="text-light">Register</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <Link to="/" className="text-decoration-none">
                                <h1 className="m-0 fw-bold">SHOME</h1>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className="btn btn-primary" type="submit">
                                        <FaSearch />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex justify-content-end">
                                <Link to="/wishlist" className="btn btn-outline-secondary me-2">
                                    <FaHeart />
                                    <span className="badge bg-danger rounded-pill">0</span>
                                </Link>
                                <Link to="/cart" className="btn btn-outline-secondary me-2">
                                    <FaShoppingCart />
                                    <span className="badge bg-danger rounded-pill">0</span>
                                </Link>
                                <Link to="/account" className="btn btn-outline-secondary">
                                    <FaUser />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/shop">All Products</Link></li>
                                    <li><Link className="dropdown-item" to="/shop/living-room">Living Room</Link></li>
                                    <li><Link className="dropdown-item" to="/shop/bedroom">Bedroom</Link></li>
                                    <li><Link className="dropdown-item" to="/shop/kitchen">Kitchen</Link></li>
                                    <li><Link className="dropdown-item" to="/shop/office">Office</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;