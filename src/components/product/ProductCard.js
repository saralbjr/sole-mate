import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);

    const {
        id,
        name,
        price,
        salePrice,
        image,
        category,
        rating,
        isNew,
        isSale
    } = product;

    const discountPercentage = salePrice
        ? Math.round(((price - salePrice) / price) * 100)
        : 0;

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
        }

        return stars;
    };

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

                        <div className="product-badges">
                            {isNew && <span className="badge new">New</span>}
                            {isSale && <span className="badge sale">{discountPercentage}% Off</span>}
                        </div>

                        <div className="product-actions">
                            <button className="action-btn" title="Add to Wishlist">
                                <FaHeart />
                            </button>
                            <button className="action-btn" title="Add to Cart">
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

                        <div className="product-rating">
                            {renderStars(rating)}
                            <span className="rating-count">({product.reviews})</span>
                        </div>

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
