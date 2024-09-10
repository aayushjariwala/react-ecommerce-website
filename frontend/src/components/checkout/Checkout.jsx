// src/components/Checkout.js
import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, data_product2, getTotalCartAmount } = useContext(ShopContext);

    const handlePayment = () => {
        // Implement payment processing logic here
        alert("Payment successful! Your order has been placed.");
        // After successful payment, you might want to clear the cart, redirect the user, etc.
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                {data_product2.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <div key={product.id} className="checkout-item">
                                <p>{product.name}</p>
                                <p>Quantity: {cartItems[product.id]}</p>
                                <p>Price: ${product.new_price}</p>
                                <p>Total: ${product.new_price * cartItems[product.id]}</p>
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="checkout-total">
                    <h3>Total Amount: ${getTotalCartAmount()}</h3>
                </div>
            </div>

            <div className="checkout-payment">
                <h2>Payment Details</h2>
                {/* This is where you would collect payment details */}
                <button onClick={handlePayment} className="checkout-button">
                    Complete Purchase
                </button>
            </div>
        </div>
    );
};

export default Checkout;
