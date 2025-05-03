import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        // Find the current post based on the id from URL parameters
        const currentPost = blogPosts.find(post => post.id.toString() === id);
        setPost(currentPost);

        // Get related posts (same category, exclude current post)
        if (currentPost) {
            const related = blogPosts
                .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
                .slice(0, 3); // Get up to 3 related posts
            setRelatedPosts(related);
        }
    }, [id]);

    if (!post) {
        return (
            <div className="container py-5 text-center">
                <div className="not-found">
                    <i className="fas fa-search mb-4"></i>
                    <h2>Blog Post Not Found</h2>
                    <p>The blog post you're looking for doesn't exist or has been removed.</p>
                    <Link to="/blog" className="btn btn-primary mt-3">
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page py-5">
            <div className="container">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{post.title}</li>
                    </ol>
                </nav>

                {/* Blog Header */}
                <div className="blog-header mb-4">
                    <span className="blog-category">{post.category}</span>
                    <h1 className="blog-title">{post.title}</h1>
                    <div className="blog-meta">
                        <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                        <span><i className="far fa-user"></i> {post.author}</span>
                        <span><i className="far fa-comment"></i> {post.comments} Comments</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="blog-featured-image mb-4">
                    <img src={post.image} alt={post.title} className="img-fluid" />
                </div>

                {/* Blog Content */}
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <p className="lead">{post.excerpt}</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </p>

                            <h2>The Importance of Quality Furniture</h2>

                            <p>
                                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>

                            <blockquote className="blockquote">
                                <p>"Good design is as little design as possible. Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials."</p>
                                <footer className="blockquote-footer">Dieter Rams</footer>
                            </blockquote>

                            <p>
                                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                            </p>

                            <h3>Key Considerations When Choosing Furniture</h3>

                            <ul>
                                <li>Consider the size and layout of your space</li>
                                <li>Think about functionality and your lifestyle needs</li>
                                <li>Choose quality materials for longevity</li>
                                <li>Select colors and styles that complement your existing decor</li>
                                <li>Don't forget about comfort and ergonomics</li>
                            </ul>

                            <p>
                                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
                                Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                                Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
                            </p>

                            {/* Tags */}
                            <div className="blog-tags mt-4">
                                <span className="me-2"><i className="fas fa-tags"></i> Tags:</span>
                                <Link to="/blog?tag=furniture" className="tag">Furniture</Link>
                                <Link to="/blog?tag=design" className="tag">Interior Design</Link>
                                <Link to="/blog?tag=trends" className="tag">Trends</Link>
                                <Link to="/blog?tag=home" className="tag">Home Decor</Link>
                            </div>

                            {/* Share Links */}
                            <div className="blog-share mt-4">
                                <span className="me-2">Share This Post:</span>
                                <a href="#" className="share-link facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="share-link twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="share-link pinterest"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#" className="share-link linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>

                            {/* Author Bio */}
                            <div className="author-bio mt-5">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="https://via.placeholder.com/100" alt="Author" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-10">
                                        <h4>{post.author}</h4>
                                        <p className="author-title">Interior Design Specialist</p>
                                        <p>
                                            Jane is a certified interior designer with over 10 years of experience in the furniture industry.
                                            She specializes in modern and contemporary design and loves helping clients create their dream spaces.
                                        </p>
                                        <div className="author-social">
                                            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="comments-section mt-5">
                                <h3>Comments ({post.comments})</h3>

                                <div className="comment">
                                    <div className="row">
                                        <div className="col-md-2 col-3">
                                            <img src="https://via.placeholder.com/80" alt="Commenter" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="col-md-10 col-9">
                                            <div className="comment-content">
                                                <h5>Michael Anderson</h5>
                                                <span className="comment-date">June 15, 2023 at 3:45 PM</span>
                                                <p>
                                                    Great article! I've been looking for some guidance on choosing furniture for my new apartment,
                                                    and this gives me a lot to think about. Thanks for sharing these insights.
                                                </p>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment comment-reply">
                                    <div className="row">
                                        <div className="col-md-2 offset-md-1 col-3 offset-1">
                                            <img src="https://via.placeholder.com/80" alt="Author" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="col-md-9 col-8">
                                            <div className="comment-content">
                                                <h5>{post.author}</h5>
                                                <span className="comment-date">June 15, 2023 at 5:20 PM</span>
                                                <p>
                                                    Thank you, Michael! I'm glad you found it helpful. Feel free to reach out if you have any specific
                                                    questions about your apartment furniture needs.
                                                </p>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment mt-4">
                                    <div className="row">
                                        <div className="col-md-2 col-3">
                                            <img src="https://via.placeholder.com/80" alt="Commenter" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="col-md-10 col-9">
                                            <div className="comment-content">
                                                <h5>Sarah Johnson</h5>
                                                <span className="comment-date">June 16, 2023 at 10:15 AM</span>
                                                <p>
                                                    I couldn't agree more with the point about choosing quality materials. I've learned this the hard way
                                                    after having to replace my living room furniture twice in three years. Investing in quality initially
                                                    saves money in the long run!
                                                </p>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comment Form */}
                                <div className="comment-form mt-5">
                                    <h3>Leave a Comment</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <input type="text" className="form-control" placeholder="Your Name *" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="email" className="form-control" placeholder="Your Email *" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="5" placeholder="Your Comment *" required></textarea>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" id="saveInfo" />
                                            <label className="form-check-label" htmlFor="saveInfo">
                                                Save my name and email for next time I comment
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Post Comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        <div className="blog-sidebar">
                            {/* Search Widget */}
                            <div className="sidebar-widget search-widget">
                                <h4>Search</h4>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search blog..." />
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Categories Widget */}
                            <div className="sidebar-widget categories-widget">
                                <h4>Categories</h4>
                                <ul className="categories-list">
                                    <li><Link to="/blog?category=Furniture">Furniture <span>(12)</span></Link></li>
                                    <li><Link to="/blog?category=Interior Design">Interior Design <span>(8)</span></Link></li>
                                    <li><Link to="/blog?category=Home Decor">Home Decor <span>(15)</span></Link></li>
                                    <li><Link to="/blog?category=DIY">DIY <span>(6)</span></Link></li>
                                    <li><Link to="/blog?category=Tips">Tips & Tricks <span>(10)</span></Link></li>
                                </ul>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="sidebar-widget recent-posts-widget">
                                <h4>Recent Posts</h4>
                                <div className="recent-posts">
                                    {blogPosts.slice(0, 3).map(recentPost => (
                                        <div className="recent-post" key={recentPost.id}>
                                            <div className="row g-0">
                                                <div className="col-3">
                                                    <img src={recentPost.image} alt={recentPost.title} className="img-fluid" />
                                                </div>
                                                <div className="col-9">
                                                    <div className="recent-post-content">
                                                        <h5><Link to={`/blog/${recentPost.id}`}>{recentPost.title}</Link></h5>
                                                        <span className="post-date">{recentPost.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tags Widget */}
                            <div className="sidebar-widget tags-widget">
                                <h4>Popular Tags</h4>
                                <div className="tags-cloud">
                                    <Link to="/blog?tag=furniture" className="tag">Furniture</Link>
                                    <Link to="/blog?tag=sofa" className="tag">Sofa</Link>
                                    <Link to="/blog?tag=chair" className="tag">Chair</Link>
                                    <Link to="/blog?tag=table" className="tag">Table</Link>
                                    <Link to="/blog?tag=bedroom" className="tag">Bedroom</Link>
                                    <Link to="/blog?tag=kitchen" className="tag">Kitchen</Link>
                                    <Link to="/blog?tag=decor" className="tag">Decor</Link>
                                    <Link to="/blog?tag=lighting" className="tag">Lighting</Link>
                                    <Link to="/blog?tag=storage" className="tag">Storage</Link>
                                </div>
                            </div>

                            {/* Subscribe Widget */}
                            <div className="sidebar-widget subscribe-widget">
                                <h4>Subscribe</h4>
                                <p>Get the latest posts delivered straight to your inbox</p>
                                <form>
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required />
                                        <button className="btn btn-primary" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="related-posts mt-5">
                        <h3 className="mb-4">Related Posts</h3>
                        <div className="row">
                            {relatedPosts.map(relatedPost => (
                                <div className="col-md-4 mb-4" key={relatedPost.id}>
                                    <div className="blog-card">
                                        <div className="blog-card-img">
                                            <img src={relatedPost.image} alt={relatedPost.title} className="img-fluid" />
                                            <div className="blog-category">{relatedPost.category}</div>
                                        </div>
                                        <div className="blog-card-body">
                                            <div className="blog-meta">
                                                <span><i className="far fa-calendar-alt"></i> {relatedPost.date}</span>
                                                <span><i className="far fa-user"></i> {relatedPost.author}</span>
                                            </div>
                                            <h3 className="blog-title">
                                                <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                                            </h3>
                                            <p className="blog-excerpt">{relatedPost.excerpt.substring(0, 100)}...</p>
                                            <Link to={`/blog/${relatedPost.id}`} className="read-more">
                                                Read More <i className="fas fa-long-arrow-alt-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;