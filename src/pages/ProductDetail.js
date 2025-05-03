import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaShareAlt, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import products from '../data/products';
import ProductCard from '../components/product/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [activeTab, setActiveTab] = useState('description');
    const [mainImage, setMainImage] = useState('');
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Find the product by id
        const productId = parseInt(id);
        const foundProduct = products.find(p => p.id === productId);

        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.images[0]);
            setSelectedColor(foundProduct.colors[0]);

            // Find related products (same category, excluding current product)
            const related = products
                .filter(p => p.category === foundProduct.category && p.id !== productId)
                .slice(0, 4);
            setRelatedProducts(related);
        }

        setLoading(false);
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= product.stock) {
            setQuantity(value);
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container py-5">
                <div className="alert alert-warning">
                    Product not found. <Link to="/shop" className="alert-link">Return to shop</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail-page py-5">
            <div className="container">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                        <li className="breadcrumb-item">
                            <Link to={`/shop/${product.category}`}>
                                {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                    </ol>
                </nav>

                {/* Product Main Info */}
                <div className="row mb-5">
                    {/* Product Images */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="product-images">
                            <div className="main-image mb-3">
                                <img src={mainImage} alt={product.name} className="img-fluid" />
                            </div>
                            <div className="thumbnail-images">
                                <div className="row g-2">
                                    {product.images.map((image, index) => (
                                        <div className="col-3" key={index}>
                                            <div
                                                className={`thumbnail ${mainImage === image ? 'active' : ''}`}
                                                onClick={() => handleImageClick(image)}
                                            >
                                                <img src={image} alt={`${product.name} ${index + 1}`} className="img-fluid" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-lg-6">
                        <div className="product-info">
                            <h1 className="product-title mb-2">{product.name}</h1>

                            <div className="product-meta mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="product-rating me-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < Math.floor(product.rating) ? "text-warning" : "text-muted"}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-muted">({product.rating.toFixed(1)}) - {product.reviewCount} Reviews</span>
                                </div>
                                <p className="mb-2">
                                    <span className="text-muted">Availability:</span>
                                    <span className={product.stock > 0 ? "text-success" : "text-danger"}>
                                        {product.stock > 0 ? ` In Stock (${product.stock} items)` : " Out of Stock"}
                                    </span>
                                </p>
                                <p className="mb-2">
                                    <span className="text-muted">SKU:</span> FURN-{product.id.toString().padStart(4, '0')}
                                </p>
                            </div>

                            <div className="product-price mb-4">
                                {product.salePrice ? (
                                    <>
                                        <span className="new-price text-danger fw-bold me-2">${product.salePrice.toFixed(2)}</span>
                                        <span className="old-price text-muted text-decoration-line-through">${product.price.toFixed(2)}</span>
                                        <span className="discount-badge ms-2">
                                            {Math.round(((product.price - product.salePrice) / product.price) * 100)}% Off
                                        </span>
                                    </>
                                ) : (
                                    <span className="price fw-bold">${product.price.toFixed(2)}</span>
                                )}
                            </div>

                            <div className="product-description mb-4">
                                <p>{product.description}</p>
                            </div>

                            <div className="product-options mb-4">
                                {/* Color Selection */}
                                <div className="color-options mb-3">
                                    <label className="fw-bold d-block mb-2">Color:</label>
                                    <div className="d-flex gap-2">
                                        {product.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className={`color-option ${selectedColor === color ? 'active' : ''}`}
                                                onClick={() => handleColorSelect(color)}
                                            >
                                                <span>{color}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity Selection */}
                                <div className="quantity-selector mb-4">
                                    <label className="fw-bold d-block mb-2">Quantity:</label>
                                    <div className="quantity-input d-flex">
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={decreaseQuantity}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control text-center"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                            max={product.stock}
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={increaseQuantity}
                                            disabled={quantity >= product.stock}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="product-actions d-flex gap-2 mb-4">
                                    <button className="btn btn-primary btn-lg flex-grow-1">
                                        <FaShoppingCart className="me-2" />
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-outline-danger btn-lg">
                                        <FaHeart />
                                    </button>
                                </div>

                                {/* Share */}
                                <div className="product-share">
                                    <span className="fw-bold d-block mb-2">Share:</span>
                                    <div className="social-share d-flex gap-2">
                                        <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="btn btn-sm btn-outline-info rounded-circle">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="btn btn-sm btn-outline-danger rounded-circle">
                                            <FaPinterestP />
                                        </a>
                                        <a href="#" className="btn btn-sm btn-outline-primary rounded-circle">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="product-tabs mb-5">
                    <ul className="nav nav-tabs" id="productTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('specifications')}
                            >
                                Specifications
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews ({product.reviewCount})
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content p-4 border border-top-0">
                        <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}>
                            <div className="product-description">
                                <p>{product.description}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'specifications' ? 'show active' : ''}`}>
                            <div className="product-specifications">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Dimensions</th>
                                            <td>Width: {product.dimensions.width}, Height: {product.dimensions.height}, Depth: {product.dimensions.depth}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Material</th>
                                            <td>{product.material}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Colors</th>
                                            <td>{product.colors.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Weight</th>
                                            <td>10 kg</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Warranty</th>
                                            <td>1 Year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`}>
                            <div className="product-reviews">
                                <div className="review-summary mb-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-4 text-center">
                                            <div className="average-rating">
                                                <h2 className="rating-value">{product.rating.toFixed(1)}</h2>
                                                <div className="stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={i < Math.floor(product.rating) ? "text-warning" : "text-muted"}
                                                            size={24}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-muted">{product.reviewCount} reviews</p>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="rating-breakdown">
                                                <div className="rating-bar d-flex align-items-center mb-2">
                                                    <span className="me-2">5</span>
                                                    <FaStar className="text-warning me-2" />
                                                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                                                        <div className="progress-bar bg-success" style={{ width: '70%' }}></div>
                                                    </div>
                                                    <span className="ms-2">70%</span>
                                                </div>
                                                <div className="rating-bar d-flex align-items-center mb-2">
                                                    <span className="me-2">4</span>
                                                    <FaStar className="text-warning me-2" />
                                                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                                                        <div className="progress-bar bg-success" style={{ width: '20%' }}></div>
                                                    </div>
                                                    <span className="ms-2">20%</span>
                                                </div>
                                                <div className="rating-bar d-flex align-items-center mb-2">
                                                    <span className="me-2">3</span>
                                                    <FaStar className="text-warning me-2" />
                                                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                                                        <div className="progress-bar bg-success" style={{ width: '5%' }}></div>
                                                    </div>
                                                    <span className="ms-2">5%</span>
                                                </div>
                                                <div className="rating-bar d-flex align-items-center mb-2">
                                                    <span className="me-2">2</span>
                                                    <FaStar className="text-warning me-2" />
                                                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                                                        <div className="progress-bar bg-success" style={{ width: '3%' }}></div>
                                                    </div>
                                                    <span className="ms-2">3%</span>
                                                </div>
                                                <div className="rating-bar d-flex align-items-center">
                                                    <span className="me-2">1</span>
                                                    <FaStar className="text-warning me-2" />
                                                    <div className="progress flex-grow-1" style={{ height: '10px' }}>
                                                        <div className="progress-bar bg-success" style={{ width: '2%' }}></div>
                                                    </div>
                                                    <span className="ms-2">2%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-form bg-light p-4 mb-4">
                                    <h4 className="mb-3">Write a Review</h4>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Your Rating</label>
                                            <div className="rating-select">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className="text-muted"
                                                        size={24}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Your Review</label>
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit Review</button>
                                    </form>
                                </div>
                                <div className="reviews-list">
                                    <h4 className="mb-3">Customer Reviews</h4>
                                    <div className="review-item mb-4 pb-4 border-bottom">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h5 className="mb-0">John Doe</h5>
                                            <div className="review-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={i < 5 ? "text-warning" : "text-muted"}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-muted small mb-2">Posted on July 10, 2023</div>
                                        <p>Great product! Very comfortable and exactly as described. The delivery was quick and the assembly was easy. Highly recommended!</p>
                                    </div>
                                    <div className="review-item mb-4 pb-4 border-bottom">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h5 className="mb-0">Jane Smith</h5>
                                            <div className="review-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={i < 4 ? "text-warning" : "text-muted"}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-muted small mb-2">Posted on June 28, 2023</div>
                                        <p>Good quality for the price. The color is slightly different than in the pictures, but still looks nice. Comfortable and sturdy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="related-products">
                    <h3 className="section-title mb-4">Related Products</h3>
                    <div className="row">
                        {relatedProducts.map(product => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;