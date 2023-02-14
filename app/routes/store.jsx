import React from "react";
import { getGuitars } from "../../app/models/guitars.server.js";

export async function loader() {
  getGuitars();

  return import("./store");
}

const Store = () => {
  return <div>Store</div>;
};

export default Store;
