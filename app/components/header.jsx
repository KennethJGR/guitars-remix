import React from "react";
import { Link } from "@remix-run/react";
import Navigation from "./navigation";
import logo from "../../public/img/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="container nav">
                <Link className="logo" to="/">
                    <img className="logo" src={logo} alt="Logo"></img>
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
