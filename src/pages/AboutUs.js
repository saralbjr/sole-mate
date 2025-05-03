import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page py-5">
            <div className="container">
                <h1 className="mb-4">About Us</h1>

                {/* Hero Section */}
                <div className="card mb-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img
                                src="https://via.placeholder.com/600x400?text=About+Shome"
                                className="img-fluid rounded-start"
                                alt="About Shome"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body h-100 d-flex flex-column justify-content-center">
                                <h2 className="card-title">Our Story</h2>
                                <p className="card-text">
                                    Shome was founded in 2010 with a simple mission: to provide high-quality,
                                    beautifully designed furniture that transforms houses into homes.
                                    What started as a small family business has grown into a trusted name
                                    in home furnishings, serving customers across the country.
                                </p>
                                <p className="card-text">
                                    We believe that furniture should be both functional and beautiful,
                                    and that everyone deserves to live in a space they love. That's why we
                                    carefully curate our collection to include pieces that balance timeless
                                    design with modern sensibilities.
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
                                    At Shome, our mission is to help people create living spaces that reflect their
                                    personal style and meet their functional needs. We strive to offer thoughtfully designed,
                                    well-crafted furniture at fair prices, while providing an exceptional shopping experience
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
                                    <li><strong>Sustainability:</strong> We're committed to environmentally responsible practices.</li>
                                    <li><strong>Innovation:</strong> We constantly seek new designs and better ways to serve our customers.</li>
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
                                src="https://via.placeholder.com/300x300?text=CEO"
                                className="card-img-top"
                                alt="CEO"
                            />
                            <div className="card-body">
                                <h5 className="card-title">John Smith</h5>
                                <p className="card-text text-muted">Founder & CEO</p>
                                <p className="card-text">
                                    John founded Shome with a vision to revolutionize furniture shopping.
                                    His background in design and business drives our company's direction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img
                                src="https://via.placeholder.com/300x300?text=Designer"
                                className="card-img-top"
                                alt="Designer"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sarah Johnson</h5>
                                <p className="card-text text-muted">Lead Designer</p>
                                <p className="card-text">
                                    With 15 years of experience in furniture design, Sarah ensures every piece
                                    in our collection meets our high standards for style and functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img
                                src="https://via.placeholder.com/300x300?text=Customer+Service"
                                className="card-img-top"
                                alt="Customer Service"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Michael Brown</h5>
                                <p className="card-text text-muted">Customer Success Manager</p>
                                <p className="card-text">
                                    Michael leads our customer service team, ensuring that every Shome
                                    customer receives the support they need for a seamless experience.
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
                                    "I've furnished my entire home with Shome pieces, and I couldn't be happier.
                                    The quality is outstanding, and the designs are timeless yet modern."
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
                                    "The customer service at Shome is unmatched. When I had an issue with my delivery,
                                    they resolved it immediately and went above and beyond to make it right."
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
                                    "Shome's furniture is the perfect blend of style, comfort, and durability.
                                    I'm especially impressed with how well their pieces have held up over time."
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