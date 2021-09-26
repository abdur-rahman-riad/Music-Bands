import React from 'react';
import InvitedBand from '../InvitedBand/InvitedBand';
import { FaClipboardCheck } from "react-icons/fa";
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    // Cost Calculation
    let bandCost = 0;
    for (const band of cart) {
        bandCost = bandCost + band.cost;
    }
    return (
        <div>
            <div className="cart-content-design">
                <h2>Invitation Summary</h2>
                <h3>Invited Band: {cart.length}</h3>
                <h3>Total Cost: {bandCost} tk</h3>
            </div>
            <hr />
            {
                cart.map(band => <InvitedBand
                    key={band.key}
                    band={band}
                ></InvitedBand>)
            }

            <button className="confirm-button"> <FaClipboardCheck /> Confirm</button>
        </div>
    );
};

export default Cart;