import React from "react";
import Navigation from "./navigation";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container content">
                <Navigation />
                <p className="copyright" > 
                    &copy; {new Date().getFullYear()} Guitar Remix. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
