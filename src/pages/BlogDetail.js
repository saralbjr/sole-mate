import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogDetail.css';
import blogData from '../data/blogData';

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogData.find(post => post.id === parseInt(id));

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    // If post not found
    if (!post) {
        return (
            <div className="container py-5 text-center">
                <h2>Blog post not found</h2>
                <p>The blog post you're looking for doesn't exist or has been removed.</p>
                <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
        );
    }

    // Find related posts (same category, excluding current post)
    const relatedPosts = blogData.filter(p =>
        p.category === post.category && p.id !== post.id
    ).slice(0, 3);

    return (
        <div className="blog-detail-page py-5">
            <div className="container">
                <div className="row">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        {/* Breadcrumb */}
                        <nav aria-label="breadcrumb" className="mb-4">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{post.title}</li>
                            </ol>
                        </nav>

                        {/* Post Header */}
                        <div className="blog-header mb-4">
                            <h1 className="blog-title">{post.title}</h1>
                            <div className="blog-meta d-flex flex-wrap align-items-center gap-3 mb-3">
                                <span className="badge bg-primary">{post.category}</span>
                                <span><i className="far fa-calendar-alt me-1"></i> {post.date}</span>
                                <span><i className="far fa-user me-1"></i> {post.author}</span>
                                <span><i className="far fa-comment me-1"></i> {post.comments.length} Comments</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="blog-featured-image mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt={post.title}
                                className="img-fluid rounded"
                            />
                        </div>

                        {/* Post Content */}
                        <div className="blog-content mb-5">
                            <p className="lead">{post.excerpt}</p>

                            <p>The world of footwear is constantly evolving, with new technologies, materials, and designs emerging every season. Whether you're a dedicated runner, a fashion enthusiast, or simply someone who values comfort, understanding the nuances of shoe design can help you make better choices for your feet and your lifestyle.</p>

                            <h2>The Evolution of Modern Footwear</h2>
                            <p>Today's shoes are the result of centuries of innovation. From basic protection against the elements to specialized sports performance enhancers, footwear has come a long way. Modern athletic shoes incorporate advanced cushioning systems, responsive materials, and biomechanical research to optimize performance and reduce injury risk.</p>

                            <div className="row my-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                                        alt="Modern footwear technology"
                                        className="img-fluid rounded"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                                        alt="Shoe design process"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>

                            <h2>Finding the Perfect Fit</h2>
                            <p>A properly fitting shoe is essential for comfort and foot health. When shopping for shoes, consider these key factors:</p>
                            <ul>
                                <li><strong>Proper sizing</strong>: Measure your feet regularly, as they can change size over time.</li>
                                <li><strong>Width options</strong>: Many people focus only on length, but width is equally important for a good fit.</li>
                                <li><strong>Activity-specific design</strong>: Choose shoes designed for your primary activities, whether running, hiking, or everyday wear.</li>
                                <li><strong>Try before you buy</strong>: Whenever possible, try shoes on in person, preferably later in the day when feet are naturally more swollen.</li>
                                <li><strong>Break-in period</strong>: Allow time for new shoes to adapt to your feet, especially with leather footwear.</li>
                            </ul>

                            <blockquote className="blockquote">
                                <p>"Give a girl the right shoes, and she can conquer the world."</p>
                                <footer className="blockquote-footer">Marilyn Monroe</footer>
                            </blockquote>

                            <h2>Caring for Your Footwear</h2>
                            <p>Proper shoe care not only extends the life of your footwear but also maintains their appearance and functionality. Different materials require different care approaches:</p>
                            <p>For leather shoes, regular cleaning, conditioning, and polishing will keep them looking great for years. Athletic shoes benefit from proper cleaning and drying away from direct heat sources. And remember, rotating between multiple pairs extends the life of all your shoes by giving cushioning materials time to recover their shape.</p>
                        </div>

                        {/* Tags and Share */}
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <div className="blog-tags">
                                <span className="me-2">Tags:</span>
                                <Link to="#" className="badge bg-light text-dark text-decoration-none me-1 p-2">Shoes</Link>
                                <Link to="#" className="badge bg-light text-dark text-decoration-none me-1 p-2">Running</Link>
                                <Link to="#" className="badge bg-light text-dark text-decoration-none me-1 p-2">Fashion</Link>
                                <Link to="#" className="badge bg-light text-dark text-decoration-none p-2">Comfort</Link>
                            </div>
                            <div className="blog-share">
                                <span className="me-2">Share:</span>
                                <a href="#" className="text-dark me-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-dark me-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-dark me-2"><i className="fab fa-pinterest"></i></a>
                                <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="author-bio card mb-5">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 mb-3 mb-md-0 text-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                            alt="Author"
                                            className="rounded-circle img-fluid"
                                            style={{ maxWidth: "120px" }}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <h3 className="h5 mb-2">{post.author}</h3>
                                        <p className="text-muted mb-2">Footwear Specialist</p>
                                        <p className="mb-0">A passionate footwear expert with over 10 years of experience in the shoe industry. Specializes in athletic performance footwear and sustainable shoe manufacturing practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comments Section */}
                        <div className="comments-section mb-5">
                            <h3 className="mb-4">{post.comments.length} Comments</h3>

                            {post.comments.map((comment, index) => (
                                <div className="comment card mb-3" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <img
                                                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 1}.jpg`}
                                                alt={comment.name}
                                                className="rounded-circle me-3"
                                                width="60"
                                                height="60"
                                            />
                                            <div>
                                                <h4 className="h6 mb-1">{comment.name}</h4>
                                                <p className="text-muted small mb-2">{comment.date}</p>
                                                <p className="mb-0">{comment.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Comment Form */}
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h3 className="h5 mb-3">Leave a Comment</h3>
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="4" placeholder="Your Comment" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Post Comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sidebar">
                            {/* Search */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Search</h3>
                                    <form className="search-form">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search posts..." />
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Categories</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="#" className="text-decoration-none">Running</Link>
                                            <span className="badge bg-primary rounded-pill">4</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="#" className="text-decoration-none">Athletic</Link>
                                            <span className="badge bg-primary rounded-pill">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="#" className="text-decoration-none">Fashion</Link>
                                            <span className="badge bg-primary rounded-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="#" className="text-decoration-none">Lifestyle</Link>
                                            <span className="badge bg-primary rounded-pill">5</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="#" className="text-decoration-none">Care & Maintenance</Link>
                                            <span className="badge bg-primary rounded-pill">2</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Recent Posts</h3>
                                    {blogData.slice(0, 3).map(recentPost => (
                                        <div className="recent-post mb-3" key={recentPost.id}>
                                            <div className="row g-0">
                                                <div className="col-4">
                                                    <img
                                                        src={recentPost.id % 3 === 0 ?
                                                            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" :
                                                            recentPost.id % 3 === 1 ?
                                                                "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" :
                                                                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                                        }
                                                        className="img-fluid rounded"
                                                        alt={recentPost.title}
                                                        style={{ height: '70px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="col-8">
                                                    <div className="ps-3">
                                                        <h4 className="h6 mb-1">
                                                            <Link to={`/blog/${recentPost.id}`} className="text-decoration-none">
                                                                {recentPost.title}
                                                            </Link>
                                                        </h4>
                                                        <small className="text-muted">{recentPost.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title h5 mb-3">Related Posts</h3>
                                    {relatedPosts.map(relatedPost => (
                                        <div className="recent-post mb-3" key={relatedPost.id}>
                                            <div className="row g-0">
                                                <div className="col-4">
                                                    <img
                                                        src={relatedPost.id % 3 === 0 ?
                                                            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" :
                                                            relatedPost.id % 3 === 1 ?
                                                                "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" :
                                                                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                                        }
                                                        className="img-fluid rounded"
                                                        alt={relatedPost.title}
                                                        style={{ height: '70px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="col-8">
                                                    <div className="ps-3">
                                                        <h4 className="h6 mb-1">
                                                            <Link to={`/blog/${relatedPost.id}`} className="text-decoration-none">
                                                                {relatedPost.title}
                                                            </Link>
                                                        </h4>
                                                        <small className="text-muted">{relatedPost.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default BlogDetail;