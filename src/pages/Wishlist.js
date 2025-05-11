import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart } = useShop();

    const handleAddToCart = (product) => {
        addToCart(product);
        // Optionally, you can remove the item from wishlist after adding to cart
        // removeFromWishlist(product.id);
    };

    return (
        <div className="wishlist-page py-5">
            <div className="container">
                <h1 className="mb-4">My Wishlist</h1>

                {wishlistItems.length === 0 ? (
                    <div className="card">
                        <div className="card-body">
                            <div className="alert alert-info">
                                Your wishlist is empty. <Link to="/shop" className="alert-link">Browse products</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {wishlistItems.map(item => (
                            <div key={item.id} className="col-md-3 mb-4">
                                <div className="card wishlist-item">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <div className="mb-2">
                                            <span className="price">Rs.{item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                <FaShoppingCart className="me-2" />
                                                Add to Cart
                                            </button>
                                            <button
                                                className="btn btn-outline-danger"
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;