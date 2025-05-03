import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="cart-page py-5">
            <div className="container">
                <h1 className="mb-4">Shopping Cart</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="alert alert-info">
                                    Your cart is empty. <Link to="/shop" className="alert-link">Continue shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Order Summary</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax:</span>
                                    <span>$0.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <strong>Total:</strong>
                                    <strong>$0.00</strong>
                                </div>
                                <Link to="/checkout" className="btn btn-primary w-100">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;