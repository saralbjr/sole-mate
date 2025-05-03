import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogData from '../data/blogData';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories from blog posts
    const categories = ['All', ...new Set(blogData.map(post => post.category))];

    // Filter posts based on search term and selected category
    const filteredPosts = blogData.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const latestPosts = blogData.slice(0, 3);
    const allPosts = blogData;

    return (
        <div className="blog-page py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mb-4">SoleMate Blog</h1>

                        {/* Search and Filter */}
                        <div className="search-filter-container mb-4">
                            <div className="row g-2">
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select
                                        className="form-select"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Featured Post */}
                        {filteredPosts.length > 0 && (
                            <div className="featured-post mb-5">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img
                                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                className="img-fluid rounded-start h-100"
                                                alt={filteredPosts[0].title}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <span className="badge bg-primary mb-2">{filteredPosts[0].category}</span>
                                                <h2 className="card-title">{filteredPosts[0].title}</h2>
                                                <p className="card-text">{filteredPosts[0].excerpt}</p>
                                                <div className="d-flex align-items-center mb-3">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                        alt={filteredPosts[0].author}
                                                        className="rounded-circle me-2"
                                                        width="40"
                                                        height="40"
                                                    />
                                                    <div>
                                                        <p className="mb-0 fw-bold">{filteredPosts[0].author}</p>
                                                        <p className="text-muted small mb-0">{filteredPosts[0].date}</p>
                                                    </div>
                                                </div>
                                                <Link to={`/blog/${filteredPosts[0].id}`} className="btn btn-primary">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Blog Posts Grid */}
                        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                            {filteredPosts.slice(1).map(post => (
                                <div className="col" key={post.id}>
                                    <div className="card h-100">
                                        <img
                                            src={post.id % 3 === 0 ?
                                                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" :
                                                post.id % 3 === 1 ?
                                                    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" :
                                                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                            }
                                            className="card-img-top"
                                            alt={post.title}
                                            height="200"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <span className="badge bg-primary mb-2">{post.category}</span>
                                            <h3 className="card-title h5">{post.title}</h3>
                                            <p className="card-text">{post.excerpt}</p>
                                        </div>
                                        <div className="card-footer bg-white border-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">{post.date}</small>
                                                <Link to={`/blog/${post.id}`} className="btn btn-sm btn-outline-primary">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sidebar">
                            {/* About Blog */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">About Our Blog</h3>
                                    <p className="card-text">
                                        Welcome to the SoleMate blog where we share the latest footwear trends,
                                        care tips, and expert advice to help you find the perfect shoes for every
                                        occasion. From running guides to fashion highlights, we've got you covered.
                                    </p>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Categories</h3>
                                    <div className="list-group list-group-flush">
                                        {categories.filter(cat => cat !== 'All').map(category => (
                                            <button
                                                key={category}
                                                className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedCategory === category ? 'active' : ''}`}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                                <span className="badge bg-primary rounded-pill">
                                                    {allPosts.filter(post => post.category === category).length}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Recent Posts</h3>
                                    {latestPosts.map(post => (
                                        <div className="recent-post mb-3" key={post.id}>
                                            <div className="row g-0">
                                                <div className="col-4">
                                                    <img
                                                        src={post.id % 3 === 0 ?
                                                            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" :
                                                            post.id % 3 === 1 ?
                                                                "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" :
                                                                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                                        }
                                                        className="img-fluid rounded"
                                                        alt={post.title}
                                                        style={{ height: '70px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="col-8">
                                                    <div className="ps-3">
                                                        <h4 className="h6 mb-1">
                                                            <Link to={`/blog/${post.id}`} className="text-decoration-none">
                                                                {post.title}
                                                            </Link>
                                                        </h4>
                                                        <small className="text-muted">{post.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Subscribe to Our Newsletter</h3>
                                    <p className="card-text">Stay updated with the latest shoe trends, exclusive offers, and new collection releases.</p>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Your email address" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Subscribe</button>
                                    </form>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Popular Tags</h3>
                                    <div className="d-flex flex-wrap gap-2">
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Running</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Athletic</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Casual</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Sneakers</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Fashion</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Comfort</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Sales</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Lifestyle</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Sport</a>
                                        <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Training</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;