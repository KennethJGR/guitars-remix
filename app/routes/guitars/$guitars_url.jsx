import { useState } from "react";
import { getGuitar } from "~/models/guitars.server";
import { useLoaderData, useOutletContext } from "@remix-run/react";
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
    const { addToCart } = useOutletContext();

    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (quantity === 0) {
            alert("Please select a quantity");
            return;
        }

        const guitarSelect = {
            id: guitar.data[0].id,
            name,
            price,
            quantity,
            image: image.data.attributes.formats.medium.url,
        };
        
        addToCart(guitarSelect);
    };

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
                <form onSubmit={handleSubmit} className="form" action="">
                    <label htmlFor="quantity">Quantity</label>
                    <select
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        name="quantity"
                        id="quantity"
                    >
                        <option value="0">- Select -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Add to cart" />
                </form>
            </div>
        </main>
    );
};

export default Guitars;
