import React from "react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar_list";
import PostList from "~/components/post_list";
import stylesGuitars from "~/styles/guitars.css";
import stylesBlog from "~/styles/blog.css";

export function meta() {
    return {
        title: "Index",
        description: "Index page",
    };
}

export function links() {
    return [
        { rel: "stylesheet", href: stylesGuitars },
        {
            rel: "stylesheet",
            href: stylesBlog,
        },
    ];
}

export async function loader() {
    const [posts, guitars] = await Promise.all([getPosts(), getGuitars()]);

    return {
        posts: posts.data,
        guitars: guitars.data,
    };
}

const Index = () => {
    const { posts, guitars } = useLoaderData();

    return (
        <>
            <main className="content">
                <GuitarList guitars={guitars} />
                <PostList posts={posts} />
            </main>
        </>
    );
};

export default Index;
