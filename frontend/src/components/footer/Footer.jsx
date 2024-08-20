import React from "react";
import './Footer.css';
import gift from '../assets/gift.png';
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import tinder from '../assets/tinder.png'




const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img  src={gift} alt=""/>
                <p>Shopper</p>

            </div>
            <ul className="footer-links">
                <li>COmpany</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>COntact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <a href="https://www.instagram.com/aayushjariwala_14" target="_blank" rel="noopener noreferrer">
                    <img  src={instagram} alt=""/>
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a  href="https://wa.me/5483330258" target="_blank" rel="noopener noreferrer">
                    <img  src={whatsapp} alt=""/>
                    </a>
                </div>
                <div className="footer-icons-container">
                    <img  src={tinder} alt=""/>
                </div>
            </div>

            <div className="footer-copyright">
                <hr/>
                <p>
                    Copyright @ 2024 - All RIghts Reserved - 
                    DEVELOPED BY AAYUSH JARIWALA
                </p>

            </div>
        </div>
    )
}

export default Footer;