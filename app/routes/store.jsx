import React from "react";
import {  useLoaderData } from "@remix-run/react";
import { getGuitars } from "../models/guitars.server.js";
import GuitarList from "~/components/guitar_list.jsx";

import styles from "../styles/guitars.css";

export function meta() {
  return {
    title: "Our Collection",
    description: "Our collection of guitars",
  };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

const Store = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <GuitarList guitars={guitars} />
    </main>
  );
};

export default Store;
