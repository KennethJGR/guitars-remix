import React from "react";
import { useOutletContext } from "@remix-run/react";
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
    const { cart } = useOutletContext();
    console.log(cart);

    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>

            <div className="content">
                <div className="cart">
                    <h2>Items</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p>${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))
                    )}
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
