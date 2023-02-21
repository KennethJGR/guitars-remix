import React from "react";
import { Link } from "@remix-run/react";

const Guitars = ({ guitar }) => {
    const { name, price, description, image, url } = guitar;

    return (
        <div className="guitars">
            <img
                src={image.data.attributes.formats.medium.url}
                alt={`guitar ${name}`}
            />
            <div className="content">
                <h3>{name}</h3>

                <p className="description">{description}</p>
                <p className="price">${price}</p>

                <Link to={`/guitars/${url}`}>
                    <button className="btn">View Product</button>
                </Link>
            </div>
        </div>
    );
};
export default Guitars;
