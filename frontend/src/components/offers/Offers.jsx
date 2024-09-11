import React from "react";
import './Offers.css';
import image from '../assets/gift.png'
import offers50 from '../assets/offers50.jpg'

const Offers = ()=>{
    return(
        <div className="offers">


            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button className="btn">Check Now</button>
            </div>

            <div className="offers-right">
                <img src={offers50} alt="" />
            </div>


        </div>
    )
}


export default Offers;