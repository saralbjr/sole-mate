import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import './ProductCard.css';
import { useShop } from '../../context/ShopContext';

const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart, addToWishlist, wishlistItems } = useShop();

    // Check if product is in wishlist
    const isInWishlist = wishlistItems.some(item => item.id === product.id);

    const {
        id,
        name,
        price,
        salePrice,
        image,
        category,
    } = product;

    // Simulate loading time (e.g., 1 second)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="product-card">
            {isLoading ? (
                <div className="skeleton-card">
                    <div className="skeleton-image" />
                    <div className="skeleton-text short" />
                    <div className="skeleton-text long" />
                    <div className="skeleton-text price" />
                </div>
            ) : (
                <div>
                    <div className="product-image">
                        <Link to={`/product/${id}`}>
                            <img src={image} alt={name} loading="lazy" />
                        </Link>
                        <div className="product-actions">
                            <button
                                className={`action-btn ${isInWishlist ? 'active' : ''}`}
                                title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToWishlist(product);
                                }}
                            >
                                <FaHeart />
                            </button>
                            <button
                                className="action-btn"
                                title="Add to Cart"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToCart(product);
                                }}
                            >
                                <FaShoppingCart />
                            </button>
                            <Link to={`/product/${id}`} className="action-btn" title="Quick View">
                                <FaEye />
                            </Link>
                        </div>
                    </div>

                    <div className="product-info">
                        <span className="product-category">{category}</span>
                        <h3 className="product-name">
                            <Link to={`/product/${id}`}>{name}</Link>
                        </h3>

                        {/* <div className="product-rating">
                            {renderStars(rating)}
                            <span className="rating-count">({product.reviews})</span>
                        </div> */}

                        <div className="product-price">
                            {salePrice ? (
                                <>
                                    <span className="current-price">Rs.{salePrice.toFixed(2)}</span>
                                    <span className="old-price">Rs.{price.toFixed(2)}</span>
                                </>
                            ) : (
                                <span className="current-price">Rs.{price.toFixed(2)}</span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
