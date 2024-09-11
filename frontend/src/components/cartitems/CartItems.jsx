import React, { useContext } from 'react';
import "./CartItems.css";
import { ShopContext } from '../../context/ShopContext';
import remove from '../assets/remove.png';

const CartItems = () => {
    const { getTotalCartAmount, data_product2, cartItems, removeFromCart } = useContext(ShopContext);

    const handleCheckout = () => {
        const authToken = localStorage.getItem('auth-token'); // Check for the auth token
        if (authToken) {
            // Redirect to the checkout page or perform the checkout action
            console.log("Proceeding to checkout");
            window.location.replace("/checkout"); // Assuming you have a checkout route
        } else {
            alert("You need to be logged in to proceed to checkout.");
            window.location.replace("/login"); // Assuming you have a login route
        }
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {data_product2.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-main'>
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='remove-icon-img' src={remove} alt="" onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart total</h1>
                    <div>
                        <div className='cartitems-totalitems'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-totalitems'>
                            <p>Shipping fees</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-totalitems'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>Proceed to checkout</button>
                </div>
                
                <div className='cartitems-romocode'>
                    <p>If you have a promo code enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='Promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
