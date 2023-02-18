import React from "react";
import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import { getPosts } from "~/models/posts.server.js";
import styles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
 
export async function loader() {
  const post = await getPosts();

  return post.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading"> Blog </h2>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
