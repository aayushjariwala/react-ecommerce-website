import React,  { useContext, useState } from "react";
import "./Navbar.css";
import logo from '../assets/logo.png';
import carticon from '../assets/carticon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from "../../context/ShopContext";



const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);



    return (
        <div className="navbar">
            <div className="navlogo">
                 <Link style={{textDecoration: 'none'}} to="/"><img src={logo} alt="logo" className="logo-image" /></Link>
                <Link style={{textDecoration: 'none'}} to="/"> <p>Shopp</p></Link>
            </div>
            <ul className="nav-menu">
                <li onClick = {()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("womens")}}><Link  style={{textDecoration: 'none'}}  to="/womens">womens</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("mens")}}><Link  style={{textDecoration: 'none'}}  to="/mens">mens</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("kids")}}><Link  style={{textDecoration: 'none'}}  to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="login-cart">

                {localStorage.getItem('auth-token')
                ?<button className="button-51" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button className="button-51" >
                Login 
            </button></Link>}

                
                <Link to='/cart'>  <img className="navimg" src={carticon} alt="cart icon" /></Link>
               
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    );
};

export default Navbar;