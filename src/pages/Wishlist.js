import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    return (
        <div className="wishlist-page py-5">
            <div className="container">
                <h1 className="mb-4">My Wishlist</h1>

                <div className="card">
                    <div className="card-body">
                        <div className="alert alert-info">
                            Your wishlist is empty. <Link to="/shop" className="alert-link">Browse products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;