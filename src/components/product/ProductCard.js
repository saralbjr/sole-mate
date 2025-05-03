import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, name, price, salePrice, rating, images, isNew, isSale, isHot } = product;

    // Calculate discount percentage if on sale
    const discountPercentage = salePrice ? Math.round(((price - salePrice) / price) * 100) : 0;

    return (
        <div className="product-card card h-100">
            <div className="product-image position-relative">
                <Link to={`/product/${id}`}>
                    <img
                        src={images[0]}
                        className="card-img-top"
                        alt={name}
                    />
                </Link>

                {/* Product badges */}
                <div className="product-badges">
                    {isNew && <span className="badge bg-success">New</span>}
                    {isSale && <span className="badge bg-danger">Sale</span>}
                    {isHot && <span className="badge bg-warning">Hot</span>}
                    {salePrice && <span className="badge bg-danger discount">{discountPercentage}% Off</span>}
                </div>

                {/* Quick action buttons */}
                <div className="product-actions">
                    <button className="btn btn-light rounded-circle" title="Add to wishlist">
                        <FaHeart className="text-danger" />
                    </button>
                    <button className="btn btn-light rounded-circle" title="Quick view">
                        <FaEye />
                    </button>
                    <button className="btn btn-light rounded-circle" title="Add to cart">
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <div className="mb-1">
                    {/* Star rating */}
                    <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.floor(rating) ? "text-warning" : "text-muted"}
                            />
                        ))}
                        <span className="ms-1 text-muted small">({rating.toFixed(1)})</span>
                    </div>
                </div>

                <h5 className="card-title">
                    <Link to={`/product/${id}`} className="text-decoration-none text-dark product-name">
                        {name}
                    </Link>
                </h5>

                <div className="product-price mt-auto">
                    {salePrice ? (
                        <>
                            <span className="text-danger fw-bold me-2">${salePrice.toFixed(2)}</span>
                            <span className="text-muted text-decoration-line-through">${price.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="fw-bold">${price.toFixed(2)}</span>
                    )}
                </div>

                <Link to={`/product/${id}`} className="btn btn-primary mt-2">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;