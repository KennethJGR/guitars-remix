import React from "react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/courses.server";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar_list";
import PostList from "~/components/post_list";
import Course from "~/components/course";
import stylesGuitars from "~/styles/guitars.css";
import stylesBlog from "~/styles/blog.css";
import stylesCourse from "~/styles/course.css";

export function meta() {
    return {
        title: "GuitarRemix Homepage",
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
        {
            rel: "stylesheet",
            href: stylesCourse,
        },
    ];
}

export async function loader() {
    const [posts, guitars, course] = await Promise.all([
        getPosts(),
        getGuitars(),
        getCourse(),
    ]);

    return {
        posts: posts.data,
        guitars: guitars.data,
        course: course.data,
    };
}

const Index = () => {
    const { posts, guitars, course } = useLoaderData();

    return (
        <>
            <h1 className="heading">Welcome to GuitarRemix</h1>
            <main className="content">
                <GuitarList guitars={guitars} />
            </main>
            <Course course={course.attributes} />
            <section className="content">
                <PostList posts={posts} />
            </section>
        </>
    );
};

export default Index;
