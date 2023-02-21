import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/post_list";
import { getPosts } from "~/models/posts.server.js";

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

    return <PostList posts={posts} />;
};

export default Blog;
