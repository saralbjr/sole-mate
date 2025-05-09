import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="checkout-page py-5">
            <div className="container">
                <h1 className="mb-4">Checkout</h1>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="mb-3">Billing Information</h4>
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Phone Number</label>
                                        <input type="tel" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="row mb-3">
                                        {/* <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" required />
                                        </div> */}
                                        <div className="col-md-3">
                                            <label className="form-label">City</label>
                                            <select className="form-select" required>
                                                <option value="">Select...</option>
                                                <option>Kathmandu</option>
                                                <option>Bhaktapur</option>
                                                <option>Lalitpur</option>
                                                <option>Pokhara</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">ZIP Code</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <h4 className="mb-3">Payment Method</h4>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="credit" checked />
                                        <label className="form-check-label" htmlFor="credit">
                                            Credit Card
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" />
                                        <label className="form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="cash" />
                                        <label className="form-check-label" htmlFor="cash">
                                            Cash On Delivery
                                        </label>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Card Name</label>
                                            <input type="text" className="form-control" placeholder="Name on card" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Card Number</label>
                                            <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Expiration</label>
                                            <input type="text" className="form-control" placeholder="MM/YY" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">CVV</label>
                                            <input type="text" className="form-control" placeholder="XXX" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Order Summary</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-muted mb-3">Your cart is empty.</p>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>Rs.0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping:</span>
                                    <span>Rs.0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax:</span>
                                    <span>Rs.0.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <strong>Total:</strong>
                                    <strong>Rs.0.00</strong>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Place Order</button>
                                <div className="text-center mt-3">
                                    <Link to="/cart" className="text-decoration-none">Return to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;