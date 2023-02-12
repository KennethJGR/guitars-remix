import React from "react";
import { Link, useLocation } from "@remix-run/react";

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="navigation">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
            </Link>
            <Link to="/us" className={location.pathname === "/us" ? "active" : ""}>
                Us
            </Link>
            <Link
                to="/store"
                className={location.pathname === "/store" ? "active" : ""}
            >
                Store
            </Link>
            <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
            >
                Blog
            </Link>
        </nav>
    );
};

export default Navigation;
