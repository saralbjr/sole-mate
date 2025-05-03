import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page py-5">
            <div className="container">
                <h1 className="mb-4">About SoleMate</h1>

                {/* Hero Section */}
                <div className="card mb-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                                className="img-fluid rounded-start"
                                alt="About SoleMate"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body h-100 d-flex flex-column justify-content-center">
                                <h2 className="card-title">Our Story</h2>
                                <p className="card-text">
                                    SoleMate was founded in 2015 with a simple mission: to provide high-quality,
                                    stylish footwear that blends comfort with fashion. What started as a small
                                    boutique shop has grown into a trusted name in the footwear industry,
                                    serving customers across the country.
                                </p>
                                <p className="card-text">
                                    We believe that shoes should be both functional and fashionable,
                                    and that everyone deserves to walk in comfort and style. That's why we
                                    carefully curate our collection to include footwear that balance timeless
                                    design with modern trends.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Values */}
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Our Mission</h3>
                                <p className="card-text">
                                    At SoleMate, our mission is to help people find footwear that complements their
                                    personal style while providing exceptional comfort. We strive to offer thoughtfully designed,
                                    well-crafted shoes at fair prices, while providing an exceptional shopping experience
                                    from browsing to delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Our Values</h3>
                                <ul className="card-text">
                                    <li><strong>Quality:</strong> We never compromise on materials or craftsmanship.</li>
                                    <li><strong>Comfort:</strong> Every shoe we sell prioritizes the health and comfort of your feet.</li>
                                    <li><strong>Sustainability:</strong> We're committed to environmentally responsible practices.</li>
                                    <li><strong>Innovation:</strong> We constantly seek new designs and better technologies.</li>
                                    <li><strong>Integrity:</strong> We're honest, transparent, and dedicated to our customers' satisfaction.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <h2 className="mb-4">Our Team</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                className="card-img-top"
                                alt="CEO"
                            />
                            <div className="card-body">
                                <h5 className="card-title">John Smith</h5>
                                <p className="card-text text-muted">Founder & CEO</p>
                                <p className="card-text">
                                    John founded SoleMate with a vision to revolutionize shoe shopping.
                                    His background in athletic footwear design and business drives our company's direction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                                className="card-img-top"
                                alt="Designer"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sarah Johnson</h5>
                                <p className="card-text text-muted">Lead Designer</p>
                                <p className="card-text">
                                    With 15 years of experience in footwear design, Sarah ensures every pair
                                    in our collection meets our high standards for style, comfort, and durability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                className="card-img-top"
                                alt="Customer Service"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Michael Brown</h5>
                                <p className="card-text text-muted">Customer Success Manager</p>
                                <p className="card-text">
                                    Michael leads our customer service team, ensuring that every SoleMate
                                    customer receives the support they need for finding the perfect shoes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <h2 className="mb-4">What Our Customers Say</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="mb-3 text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text">
                                    "I've bought multiple pairs from SoleMate, and I couldn't be happier.
                                    The quality is outstanding, and the designs are trendy yet timeless.
                                    Plus, they're the most comfortable shoes I've ever owned!"
                                </p>
                                <p className="card-text text-end mb-0">— Emily R.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="mb-3 text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="card-text">
                                    "The customer service at SoleMate is unmatched. When I received the wrong size,
                                    they resolved it immediately with free overnight shipping for the correct pair.
                                    Their running shoes have improved my marathon times!"
                                </p>
                                <p className="card-text text-end mb-0">— David K.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="mb-3 text-warning">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p className="card-text">
                                    "SoleMate's shoes are the perfect blend of style, comfort, and durability.
                                    I'm especially impressed with how well their athletic shoes have held up through
                                    my daily gym workouts. Worth every penny!"
                                </p>
                                <p className="card-text text-end mb-0">— Jennifer T.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;