import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories from blog posts
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter blog posts based on search term and selected category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="blog-page py-5">
            <div className="container">
                <h1 className="mb-4">Our Blog</h1>

                {/* Filter and Search Section */}
                <div className="blog-filters mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="category-filter">
                                <label htmlFor="categoryFilter" className="form-label">Filter by Category:</label>
                                <select
                                    id="categoryFilter"
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search-box">
                                <label htmlFor="searchInput" className="form-label">Search Posts:</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="searchInput"
                                        className="form-control"
                                        placeholder="Search by keyword..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="row">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
                                <div className="blog-card">
                                    <div className="blog-card-img">
                                        <img src={post.image} alt={post.title} className="img-fluid" />
                                        <div className="blog-category">{post.category}</div>
                                    </div>
                                    <div className="blog-card-body">
                                        <div className="blog-meta">
                                            <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                                            <span><i className="far fa-user"></i> {post.author}</span>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                        </h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <Link to={`/blog/${post.id}`} className="read-more">
                                            Read More <i className="fas fa-long-arrow-alt-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <div className="no-results">
                                <i className="fas fa-search mb-3"></i>
                                <h3>No blog posts found</h3>
                                <p>Try adjusting your search or filter to find what you're looking for.</p>
                                <button
                                    className="btn btn-outline-primary mt-3"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('All');
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {filteredPosts.length > 0 && (
                    <nav className="blog-pagination mt-4">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Subscribe Section */}
                <div className="subscribe-section mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="subscribe-card">
                                <h3>Subscribe to Our Newsletter</h3>
                                <p>Get the latest blog posts, design tips, and promotions directly to your inbox</p>
                                <form className="subscribe-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required />
                                        <button className="btn btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;