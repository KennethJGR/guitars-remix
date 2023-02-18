import React from "react";
import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

export default function Post({ post }) {
    const { Title, Content, image, url, publishedAt } = post;

    return (
        <article className="post">
            <img src={image.data.attributes.formats.small.url} alt={`Blog${Title}`} />
            <div className="content">
                <h3>{Title}</h3>
                <p className="date">
                    <small>{formatDate(publishedAt)}</small>
                </p>
                <p className="resume">{Content}</p>
                <Link to={`/posts/${url}`} className="btn">
                    Read more
                </Link>
            </div>
        </article>
    );
}
