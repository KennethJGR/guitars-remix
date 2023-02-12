import React from "react";
import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container barrier">
                <Link className="logo" to="/">
                    <img className="logo" src={logo} alt="Logo"></img>
                </Link>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/us">Us</Link>
                    <Link to="/store">Store</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
