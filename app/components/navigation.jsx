import React from "react";
import { Link, useLocation } from "@remix-run/react";
import cart from "../../public/img/cart.png";

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
            <Link to="/cart">
                <img src={cart} alt="cart" />
            </Link>
        </nav>
    );
};

export default Navigation;
