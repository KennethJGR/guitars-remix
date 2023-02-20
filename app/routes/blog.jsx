import React from "react";
import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/post_list";
import { getPosts } from "~/models/posts.server.js";
import styles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const post = await getPosts();

  return post.data;
}

export function meta() {
  return {
    title: "GuitarRemix-Blog",
    description: "A blog about the web",
  };
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container">
      <PostList posts={posts} />
    </main>
  );
};

export default Blog;
