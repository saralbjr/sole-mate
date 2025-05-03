import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/productData';
import './Shop.css';

const Shop = () => {
    const { category } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('featured');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState(category ? [category] : []);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    // Get unique categories from products
    const categories = [...new Set(products.map(product => product.category))];

    // Filter and sort products based on selected options
    useEffect(() => {
        let result = [...products];

        // Filter by search query
        if (searchQuery) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategories.length > 0) {
            result = result.filter(product => selectedCategories.includes(product.category));
        }

        // Filter by price range
        result = result.filter(product => {
            const effectivePrice = product.salePrice || product.price;
            return effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
        });

        // Sort products
        switch (sortOption) {
            case 'price-low-high':
                result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
                break;
            case 'price-high-low':
                result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
                break;
            case 'newest':
                result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            default: // 'featured'
                result.sort((a, b) => {
                    if (a.isHot !== b.isHot) return a.isHot ? -1 : 1;
                    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
                    return 0;
                });
        }

        setFilteredProducts(result);
    }, [searchQuery, selectedCategories, priceRange, sortOption, category]);

    // Toggle category selection
    const handleCategoryChange = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat)
                ? prev.filter(c => c !== cat)
                : [...prev, cat]
        );
    };

    // Handle price range change
    const handlePriceChange = (e, index) => {
        const value = parseInt(e.target.value);
        setPriceRange(prev => {
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
    };

    return (
        <div className="shop-page py-5">
            <div className="container">
                {/* Shop Banner */}
                <div className="shop-banner mb-5">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80" alt="Shop Banner" className="img-fluid" />
                    <div className="shop-banner-content">
                        <h1>Find Your Perfect Pair</h1>
                        <p>Quality footwear for every lifestyle</p>
                    </div>
                </div>

                <div className="row">
                    {/* Shop Sidebar - Filters */}
                    <div className="col-lg-3">
                        <div className="shop-sidebar">
                            <div className="card mb-4">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="m-0">Filters</h4>
                                </div>
                                <div className="card-body">
                                    <div className="mb-4">
                                        <h5>Categories</h5>
                                        <div className="filter-categories">
                                            {categories.map(cat => (
                                                <div className="form-check" key={cat}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={`cat-${cat}`}
                                                        checked={selectedCategories.includes(cat)}
                                                        onChange={() => handleCategoryChange(cat)}
                                                    />
                                                    <label className="form-check-label" htmlFor={`cat-${cat}`}>
                                                        {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h5>Price Range</h5>
                                        <div className="price-filter">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>${priceRange[0]}</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                            <div className="input-group mb-2">
                                                <span className="input-group-text">Min</span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={priceRange[0]}
                                                    onChange={(e) => handlePriceChange(e, 0)}
                                                    min="0" max={priceRange[1]}
                                                />
                                            </div>
                                            <div className="input-group">
                                                <span className="input-group-text">Max</span>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={priceRange[1]}
                                                    onChange={(e) => handlePriceChange(e, 1)}
                                                    min={priceRange[0]} max="1000"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5>Product Status</h5>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="filter-sale" />
                                            <label className="form-check-label" htmlFor="filter-sale">
                                                On Sale
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="filter-new" />
                                            <label className="form-check-label" htmlFor="filter-new">
                                                New Arrivals
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="filter-instock" />
                                            <label className="form-check-label" htmlFor="filter-instock">
                                                In Stock
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Product */}
                            <div className="card mb-4">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="m-0">Featured</h4>
                                </div>
                                <div className="card-body">
                                    <div className="featured-product">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Featured Product" className="img-fluid mb-3" />
                                        <h5>Air Glide Running Shoes</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="text-decoration-line-through text-muted me-2">$129.99</span>
                                                <span className="fw-bold text-danger">$99.99</span>
                                            </div>
                                            <span className="badge bg-danger">SALE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shop Main Content */}
                    <div className="col-lg-9">
                        <div className="shop-header mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h1 className="shop-title">
                                        {category
                                            ? `${category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`
                                            : 'All Products'
                                        }
                                    </h1>
                                    <p className="text-muted">
                                        Showing {filteredProducts.length} products
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex justify-content-md-end align-items-center">
                                        <div className="view-mode me-3">
                                            <button
                                                className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                                                onClick={() => setViewMode('grid')}
                                            >
                                                <i className="fas fa-th"></i>
                                            </button>
                                            <button
                                                className={`btn btn-sm ms-1 ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                                                onClick={() => setViewMode('list')}
                                            >
                                                <i className="fas fa-list"></i>
                                            </button>
                                        </div>
                                        <div className="sort-by">
                                            <select
                                                className="form-select"
                                                value={sortOption}
                                                onChange={(e) => setSortOption(e.target.value)}
                                            >
                                                <option value="featured">Featured</option>
                                                <option value="price-low-high">Price: Low to High</option>
                                                <option value="price-high-low">Price: High to Low</option>
                                                <option value="newest">Newest First</option>
                                                <option value="rating">Highest Rated</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid/List */}
                        {filteredProducts.length === 0 ? (
                            <div className="alert alert-info">
                                No products found matching your criteria. Try adjusting your filters.
                            </div>
                        ) : (
                            <div className={`product-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                                <div className="row">
                                    {filteredProducts.map(product => (
                                        <div key={product.id} className={viewMode === 'grid' ? "col-md-4 mb-4" : "col-12 mb-4"}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pagination */}
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Previous</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;