import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-page py-5">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-1 fw-bold">404</h1>
                        <h2 className="mb-4">Page Not Found</h2>
                        <p className="lead mb-5">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <Link to="/" className="btn btn-primary btn-lg">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;