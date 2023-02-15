import React from "react";
import { getGuitar } from "~/models/guitars.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/guitars.css";

export function meta({ data }) {
    return {
        title: `GuitarRemix - ${data.data[0].attributes.name}`,
        description: `Guitars, Guitar store, guitar ${data.data[0].attributes.name}`,
    };
}

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export async function loader(request) {
    const { guitars_url } = request.params;
    const guitar = await getGuitar(guitars_url);

    return guitar;
}

const Guitars = () => {
    const guitar = useLoaderData();
    const { name, price, description, image } = guitar.data[0].attributes;

    return (
        <main className="content guitars">
            <img
                src={image.data.attributes.formats.medium.url}
                alt={`guitar ${name}`}
            ></img>

            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>
            </div>
        </main>
    );
};

export default Guitars;
