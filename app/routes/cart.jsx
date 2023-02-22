import React from "react";
import styleCart from "../styles/cart.css";

export function links() {
    return [{ rel: "stylesheet", href: styleCart }];
}

export function meta() {
    return {
        title: "Shopping Cart",
        description: "Shopping Cart",
    };
}

const Cart = () => {
    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className="cart">
                    <h2>Items</h2>
                </div>
                <aside className="resume">
                    <h3>Order's Summary</h3>
                    <p>Subtotal: $0</p>
                </aside>
            </div>
        </main>
    );
};

export default Cart;
