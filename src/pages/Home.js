import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/productData';
import './Home.css';

const Home = () => {
    // Get featured products (first 8)
    const featuredProducts = products.slice(0, 8);

    // Get new arrivals (products marked as new)
    const newArrivals = products.filter(product => product.isNew).slice(0, 4);

    // Get sale products (products with a sale price)
    const onSale = products.filter(product => product.isSale).slice(0, 4);

    return (
        <div className="home-page">
            {/* Hero Banner */}
            <section className="hero-section">
                <Carousel fade>
                    <Carousel.Item>
                        <div className="carousel-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                            <div className="carousel-content">
                                <h1>Run Further. Run Faster.</h1>
                                <p>Discover our new collection of performance running shoes</p>
                                <Link to="/shop?category=running" className="btn-primary">Shop Running</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80)' }}>
                            <div className="carousel-content">
                                <h1>Everyday Comfort, Exceptional Style</h1>
                                <p>Explore our selection of casual shoes for any occasion</p>
                                <Link to="/shop?category=casual" className="btn-primary">Shop Casual</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)' }}>
                            <div className="carousel-content">
                                <h1>Elevate Your Game</h1>
                                <p>Performance shoes engineered for athletes at every level</p>
                                <Link to="/shop?category=athletic" className="btn-primary">Shop Athletic</Link>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Benefits */}
            <section className="benefits-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="benefit-content">
                                    <h4>Free Shipping</h4>
                                    <p>On all orders over $75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-undo"></i>
                                </div>
                                <div className="benefit-content">
                                    <h4>Easy Returns</h4>
                                    <p>30-day return policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="benefit-content">
                                    <h4>Secure Payment</h4>
                                    <p>100% secure checkout</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <div className="benefit-content">
                                    <h4>Customer Support</h4>
                                    <p>24/7 dedicated support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Shop By Category</h2>
                        <p>Find the perfect shoes for every occasion</p>
                    </div>
                    <div className="row">
                        {categories.map(category => (
                            <div key={category.id} className="col-md-4 col-sm-6">
                                <div className="category-card">
                                    <Link to={`/shop?category=${category.name.toLowerCase()}`}>
                                        <div className="category-image">
                                            <img src={category.image} alt={category.name} />
                                        </div>
                                        <div className="category-content">
                                            <h3>{category.name}</h3>
                                            <p>{category.count} Products</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Products</h2>
                        <p>Our most popular and best-selling shoes</p>
                    </div>
                    <div className="row">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/shop" className="btn-secondary">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* New Arrivals and Sale Section */}
            <section className="split-section">
                <div className="container">
                    <div className="row">
                        {/* New Arrivals */}
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>New Arrivals</h2>
                                <p>The latest additions to our collection</p>
                            </div>
                            <div className="row">
                                {newArrivals.map(product => (
                                    <div key={product.id} className="col-sm-6">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/shop?filter=new" className="btn-outline">View All New</Link>
                            </div>
                        </div>

                        {/* Sale Products */}
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>On Sale</h2>
                                <p>Limited time offers at special prices</p>
                            </div>
                            <div className="row">
                                {onSale.map(product => (
                                    <div key={product.id} className="col-sm-6">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/shop?filter=sale" className="btn-outline">View All Sale</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cta-content">
                                <h2>Download the SoleMate App</h2>
                                <p>Get exclusive offers, easy ordering, and track your activity with our fitness features.</p>
                                <div className="app-buttons">
                                    <a href="#" className="app-btn">
                                        <i className="fab fa-apple"></i>
                                        <span>App Store</span>
                                    </a>
                                    <a href="#" className="app-btn">
                                        <i className="fab fa-google-play"></i>
                                        <span>Google Play</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="instagram-section">
                <div className="container">
                    <div className="section-title">
                        <h2>@SoleMate on Instagram</h2>
                        <p>Follow us and share your style with #MySoleMate</p>
                    </div>
                    <div className="row instagram-feed">
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
                                <img src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Instagram post" />
                                <div className="instagram-overlay">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;