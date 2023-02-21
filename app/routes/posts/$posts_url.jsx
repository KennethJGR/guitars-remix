import React from "react";
import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/blog.css";
import { formatDate } from "~/utils/helpers";
import { Link } from "react-router-dom";

export async function loader({ params }) {
    const { posts_url } = params;

    const post = await getPost(posts_url);

    if (post.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Post not found",
        });
    }

    return post;
}

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function meta({ data }) {
    if (!data) {
        return {
            title: `GuitarRemix - Not Found`,
            description: `Guitars, Guitar store, guitar not found`,
        };
    }

    return {
        title: `GuitarRemix - ${data.data[0].attributes.Title}`,
        description: `Guitars, Guitar store, guitar ${data.data[0].attributes.Title}`,
    };
}

const Posts = () => {
    const post = useLoaderData();

    const { Title, Content, image, url, publishedAt } = post?.data[0]?.attributes;


    return (
        <article className="blogpost content">
            <img src={image.data.attributes.url} alt={`Blog${Title}`} />
            <div className="content">
                <h3>{Title}</h3>
                <p className="date">
                    <small>{formatDate(publishedAt)}</small>
                </p>
                <p className="text">{Content}</p>
            </div>
        </article>
    );
};

export default Posts;
