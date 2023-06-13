import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <h1>My Reading List</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>Logout</li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};



