import React from "react";
import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "../../app/models/guitars.server.js";
import Guitars from "~/components/guitars.jsx";

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
      <h2 className="heading">Our Collection</h2>

      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitars key={guitar?.id} guitar={guitar?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Store;
