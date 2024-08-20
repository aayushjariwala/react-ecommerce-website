import React, { useEffect, useState } from "react";
import './NewColections.css'

import Item from '../item/Item'

const NewCollections = () =>{
    const[data_product2, setdata_product2] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setdata_product2(data))
    },[])
    return (
        <div className="newcollection">
            <h1>New collections</h1>
            <hr/>
            <div className="collections">
                {data_product2.map((item, i)=>{
                    return < Item key={i} id={item.id} name={item.name}  image={item.image1} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    )
}

export default NewCollections;