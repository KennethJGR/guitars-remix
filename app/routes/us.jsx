import React from "react";
import image from "../../public/img/us.jpg";
import styles from "../styles/us.css";

export function meta() {
    return {
        title: "Guitar-Remix-Us",
        description: "This is the Us page",
    };
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "preload",
            href: image,
            as: "image",
        },
    ];
}

const Us = () => {
    return (
        <main className="container us">
            <h2 className="heading">This is the Us page</h2>
            <div className="content">
                <img src={image} alt=" img_us " />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                        aliquam porro delectus quibusdam excepturi temporibus dolorum beatae
                        minus perspiciatis harum eaque molestias repellendus, ipsam
                        praesentium qui, voluptates dolorem blanditiis cumque.
                    </p>{" "}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                        aliquam porro delectus quibusdam excepturi temporibus dolorum beatae
                        minus perspiciatis harum eaque molestias repellendus, ipsam
                        praesentium qui, voluptates dolorem blanditiis cumque.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Us;
