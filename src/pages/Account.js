import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="account-page py-5">
            <div className="container">
                <h1 className="mb-4">My Account</h1>

                <div className="row">
                    <div className="col-md-3">
                        <div className="card mb-4">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Navigation</h5>
                            </div>
                            <div className="list-group list-group-flush">
                                <button
                                    className={`list-group-item list-group-item-action ${activeTab === 'dashboard' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('dashboard')}
                                >
                                    Dashboard
                                </button>
                                <button
                                    className={`list-group-item list-group-item-action ${activeTab === 'orders' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('orders')}
                                >
                                    Orders
                                </button>
                                <button
                                    className={`list-group-item list-group-item-action ${activeTab === 'addresses' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('addresses')}
                                >
                                    Addresses
                                </button>
                                <button
                                    className={`list-group-item list-group-item-action ${activeTab === 'account-details' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('account-details')}
                                >
                                    Account Details
                                </button>
                                <Link to="/login" className="list-group-item list-group-item-action text-danger">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {activeTab === 'dashboard' && (
                                    <div>
                                        <h4>Dashboard</h4>
                                        <p>Hello, <strong>User</strong> (not User? <Link to="/login">Log out</Link>)</p>
                                        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                    </div>
                                )}

                                {activeTab === 'orders' && (
                                    <div>
                                        <h4>Orders</h4>
                                        <div className="alert alert-info">
                                            No order has been made yet.
                                        </div>
                                        <Link to="/shop" className="btn btn-primary">Browse Products</Link>
                                    </div>
                                )}

                                {activeTab === 'addresses' && (
                                    <div>
                                        <h4>Addresses</h4>
                                        <p>The following addresses will be used on the checkout page by default.</p>

                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <div className="card mb-3">
                                                    <div className="card-header d-flex justify-content-between">
                                                        <h5 className="mb-0">Billing Address</h5>
                                                        <a href="#" className="text-decoration-none">Edit</a>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">You have not set up this type of address yet.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card mb-3">
                                                    <div className="card-header d-flex justify-content-between">
                                                        <h5 className="mb-0">Shipping Address</h5>
                                                        <a href="#" className="text-decoration-none">Edit</a>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">You have not set up this type of address yet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'account-details' && (
                                    <div>
                                        <h4>Account Details</h4>
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Display Name</label>
                                                <input type="text" className="form-control" />
                                                <small className="form-text text-muted">This will be how your name will be displayed in the account section and in reviews</small>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>

                                            <h5 className="mt-4">Password Change</h5>
                                            <div className="mb-3">
                                                <label className="form-label">Current Password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">New Password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Confirm New Password</label>
                                                <input type="password" className="form-control" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;