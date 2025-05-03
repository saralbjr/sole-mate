import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page py-5">
            <div className="container">
                <h1 className="mb-4">Contact Us</h1>

                {/* Contact Info Cards */}
                <div className="row mb-5">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="contact-info-card">
                            <div className="icon-wrapper">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Our Location</h3>
                            <p>123 Furniture Street, Design District</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="contact-info-card">
                            <div className="icon-wrapper">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>Phone Numbers</h3>
                            <p>Customer Service: (555) 123-4567</p>
                            <p>Orders & Support: (555) 765-4321</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info-card">
                            <div className="icon-wrapper">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>Email Us</h3>
                            <p>info@shome-furniture.com</p>
                            <p>support@shome-furniture.com</p>
                        </div>
                    </div>
                </div>

                {/* Map and Contact Form */}
                <div className="row">
                    {/* Google Map */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="map-container">
                            <div className="map-placeholder">
                                <img
                                    src="https://via.placeholder.com/600x400?text=Google+Map"
                                    alt="Store location map"
                                    className="img-fluid"
                                />
                                <div className="map-overlay">
                                    <p>Interactive map loading...</p>
                                    <small>(An actual Google Map would be integrated here)</small>
                                </div>
                            </div>
                            <div className="store-hours mt-4">
                                <h3>Store Hours</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Monday - Friday</td>
                                            <td>9:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td>10:00 AM - 6:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>11:00 AM - 5:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="contact-form-container">
                            <h2>Send Us a Message</h2>
                            <p className="mb-4">Have a question or comment? Fill out the form below and we'll get back to you as soon as possible.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address*</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message*</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section mt-5">
                    <h2 className="mb-4">Frequently Asked Questions</h2>
                    <div className="accordion" id="contactFaqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is your return policy?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFaqAccordion">
                                <div className="accordion-body">
                                    We offer a 30-day return policy on most items. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or store credit. Custom-made items and clearance sales are final and cannot be returned.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How long does shipping take?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFaqAccordion">
                                <div className="accordion-body">
                                    Shipping times vary depending on your location and the items purchased. Small accessories typically ship within 1-3 business days. Furniture items may take 5-10 business days for delivery. Custom orders can take 2-4 weeks to manufacture before shipping.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do you offer assembly services?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFaqAccordion">
                                <div className="accordion-body">
                                    Yes, we offer professional assembly services for an additional fee. You can select this option during checkout. Our expert team will deliver and assemble your furniture, ensuring everything is set up perfectly in your home.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;