import React from "react";
import imag from '../assets/down-arrow.png'
import './BreadCrums.css';
import next from '../assets/next.png'
import {Link} from 'react-router-dom';
const BreadCrums = (props)=>{
    const {product} = props;
    return(
        <div className="breadcrums">
           <Link style={{textDecoration: 'none'}}  to="/">  HOME  </Link><img  src={next}/> 
            <Link style={{textDecoration: 'none'}} to="/">Shop  </Link> 
             <img  src={next}/>
           <Link style={{textDecoration: 'none'}} to={`/${product.category}s`} >   {product.category} </Link>
             <img  src={next}/>
             {product.name}
        </div>
    )
}

export default BreadCrums