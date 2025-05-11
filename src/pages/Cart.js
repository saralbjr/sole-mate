import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, totalAmount, removeFromCart, updateQuantity } = useShop();

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div className="cart-page py-5">
            <div className="container">
                <h1 className="mb-4">Shopping Cart</h1>
                <div className="row">
                    <div className="col-lg-8">
                        {cartItems.length === 0 ? (
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="alert alert-info">
                                        Your cart is empty. <Link to="/shop" className="alert-link">Continue shopping</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="img-fluid rounded"
                                                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                                                />
                                                                <div className="ms-3">
                                                                    <Link to={`/product/${item.id}`} className="text-decoration-none">
                                                                        <h6 className="mb-0">{item.name}</h6>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Rs.{item.price.toFixed(2)}</td>
                                                        <td>
                                                            <div className="quantity-control d-flex align-items-center">
                                                                <button
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                                    disabled={item.quantity <= 1}
                                                                >
                                                                    <FaMinus />
                                                                </button>
                                                                <span className="mx-2">{item.quantity}</span>
                                                                <button
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                >
                                                                    <FaPlus />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>Rs.{(item.price * item.quantity).toFixed(2)}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Order Summary</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>Rs.{totalAmount.toFixed(2)}</span>
                                </div>
                                {/* <div className="d-flex justify-content-between mb-2">
                                    <span>Shipping:</span>
                                    <span>Rs.0.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax:</span>
                                    <span>Rs.0.00</span>
                                </div> */}
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <strong>Total:</strong>
                                    <strong>Rs.{totalAmount.toFixed(2)}</strong>
                                </div>
                                <Link
                                    to="/checkout"
                                    className={`btn btn-primary w-100 ${cartItems.length === 0 ? 'disabled' : ''}`}
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;