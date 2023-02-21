import React from "react";
import { getGuitar } from "~/models/guitars.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/guitars.css";

export async function loader(request) {
    const { guitars_url } = request.params;

    const guitar = await getGuitar(guitars_url);

    if (guitar.data.length === 0) {
        throw new Response("Not found", {
            status: 404,
            statusText: " Guitar not found",
        });
    }

    return guitar;
}

export function meta({ data }) {
    if (!data) {
        return {
            title: `GuitarRemix - Not Found`,
            description: `Guitars, Guitar store, guitar not found`,
        };
    }

    return {
        title: `GuitarRemix - ${data.data[0].attributes.name}`,
        description: `Guitars, Guitar store, guitar ${data.data[0].attributes.name}`,
    };
}

export function links() {
    return [{ rel: "stylesheet", href: styles }];
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
