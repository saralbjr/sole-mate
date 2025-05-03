import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import ProductCard from '../components/product/ProductCard';
import products from '../data/products';
import blogPosts from '../data/blogPosts';
import './Home.css';

const Home = () => {
    // Filter featured products (those marked as hot or new)
    const featuredProducts = products.filter(product => product.isHot || product.isNew);

    // Filter products on sale
    const saleProducts = products.filter(product => product.isSale);

    // Get latest blog posts (first 3)
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Carousel */}
            <section className="hero-section">
                <Carousel>
                    <Carousel.Item>
                        <div className="hero-slide bg-light text-dark d-flex align-items-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h1 className="display-4 fw-bold">Modern Furniture Collection</h1>
                                        <p className="lead">Transform your home with our stylish and comfortable furniture pieces.</p>
                                        <Link to="/shop" className="btn btn-primary btn-lg">Shop Now</Link>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            src="https://via.placeholder.com/600x400?text=Modern+Furniture"
                                            alt="Modern Furniture"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="hero-slide bg-dark text-light d-flex align-items-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h1 className="display-4 fw-bold">Summer Sale</h1>
                                        <p className="lead">Up to 50% off on selected furniture items. Limited time offer.</p>
                                        <Link to="/shop" className="btn btn-light btn-lg">View Offers</Link>
                                    </div>
                                    <div className="col-md-6">
                                        <img
                                            src="https://via.placeholder.com/600x400?text=Summer+Sale"
                                            alt="Summer Sale"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Category Boxes */}
            <section className="categories-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-4">Shop By Category</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="category-box position-relative">
                                <img src="https://via.placeholder.com/400x300?text=Living+Room" alt="Living Room" className="img-fluid" />
                                <div className="category-info">
                                    <h3>Living Room</h3>
                                    <Link to="/shop/living-room" className="btn btn-outline-light">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-box position-relative">
                                <img src="https://via.placeholder.com/400x300?text=Bedroom" alt="Bedroom" className="img-fluid" />
                                <div className="category-info">
                                    <h3>Bedroom</h3>
                                    <Link to="/shop/bedroom" className="btn btn-outline-light">Explore</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-box position-relative">
                                <img src="https://via.placeholder.com/400x300?text=Kitchen" alt="Kitchen" className="img-fluid" />
                                <div className="category-info">
                                    <h3>Kitchen</h3>
                                    <Link to="/shop/kitchen" className="btn btn-outline-light">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products-section py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-4">Featured Products</h2>
                    <div className="row">
                        {featuredProducts.slice(0, 4).map(product => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/shop" className="btn btn-outline-primary">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section className="banner-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner bg-primary text-white p-5 text-center">
                                <h2 className="mb-3">Summer Sale - Up to 50% Off</h2>
                                <p className="lead mb-4">Limited time offer on selected furniture items. Don't miss out!</p>
                                <Link to="/shop" className="btn btn-light btn-lg">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sale Products */}
            <section className="sale-products-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-4">On Sale</h2>
                    <div className="row">
                        {saleProducts.slice(0, 4).map(product => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/shop" className="btn btn-outline-primary">View All Sale Items</Link>
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts */}
            <section className="blog-section py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-4">Latest From Our Blog</h2>
                    <div className="row">
                        {latestPosts.map(post => (
                            <div key={post.id} className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <img src={post.image} className="card-img-top" alt={post.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.excerpt}</p>
                                        <Link to={`/blog/${post.slug}`} className="btn btn-outline-primary">Read More</Link>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <small className="text-muted">
                                            {new Date(post.publishDate).toLocaleDateString()} |
                                            <span className="ms-2">{post.comments} Comments</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/blog" className="btn btn-outline-primary">View All Posts</Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter-section py-5 bg-dark text-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h3 className="mb-3">Subscribe to Our Newsletter</h3>
                            <p className="mb-4">Stay updated with our latest products, offers, and design inspiration.</p>
                            <form className="newsletter-form">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email Address" />
                                    <button className="btn btn-primary" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;