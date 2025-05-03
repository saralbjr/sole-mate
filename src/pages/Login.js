import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Login to Your Account</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" required />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </form>

                                <div className="mt-3 text-center">
                                    <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                                </div>

                                <hr />

                                <div className="text-center">
                                    <p>Don't have an account? <Link to="/register" className="text-decoration-none">Register here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;