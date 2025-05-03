import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
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

    // Calculate discount percentage if there's a sale price
    const discountPercentage = salePrice
        ? Math.round(((price - salePrice) / price) * 100)
        : 0;

    // Generate stars based on rating
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

    return (
        <div className="product-card">
            <div className="product-image">
                <Link to={`/product/${id}`}>
                    <img src={image} alt={name} />
                </Link>

                {/* Product badges */}
                <div className="product-badges">
                    {isNew && <span className="badge new">New</span>}
                    {isSale && <span className="badge sale">{discountPercentage}% Off</span>}
                </div>

                {/* Quick action buttons */}
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
                            <span className="current-price">${salePrice.toFixed(2)}</span>
                            <span className="old-price">${price.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="current-price">${price.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;