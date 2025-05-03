import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-page py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Create an Account</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" required />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="termsAgreement" required />
                                        <label className="form-check-label" htmlFor="termsAgreement">
                                            I agree to the <a href="#">Terms and Conditions</a>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">Register</button>
                                </form>

                                <hr />

                                <div className="text-center">
                                    <p>Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;