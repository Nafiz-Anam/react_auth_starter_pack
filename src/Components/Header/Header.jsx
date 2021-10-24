import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <div className="navigation container shadow bg-body rounded">
                <nav className="navbar navbar-expand-lg  navbar-light">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            {/* <img src={logo} alt="logo" /> */}
                            <h1>Demo</h1>
                        </span>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/">Home</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/about">About</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/profile">Profile</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/contact">
                                            Contact Us
                                        </NavLink>
                                    </span>
                                </li>
                                {/* conditional rendering for auth links  */}
                                {/* before login user  */}
                                {!user?.email && (
                                    <li className="  nav-item">
                                        <button className="nav-link login-btn btn">
                                            <NavLink to="/login">Login</NavLink>
                                        </button>
                                    </li>
                                )}
                                {!user?.email && (
                                    <li className="  nav-item">
                                        <button className="nav-link login-btn btn">
                                            <NavLink to="/register">Register</NavLink>
                                        </button>
                                    </li>
                                )}
                                {/* after login user  */}
                                {user?.email && (
                                    <li className="nav-item">
                                        <span className="nav-link">
                                            {user?.displayName
                                                ? user?.displayName
                                                : "Anonymous"}
                                        </span>
                                    </li>
                                )}
                                {user?.email && (
                                    <li className="nav-item">
                                        <button
                                            onClick={logout}
                                            className="btn btn-danger logout-btn"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                )}
                                {/* conditional rendering for auth links  */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
