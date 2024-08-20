import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import down from  '../components/assets/down-arrow.png'
import Item from '../components/item/Item';
const ShopCategory = (props) => {
    const { data_product2 } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img 
                className='shopcategory-banner'
                src={props.banner} 
                alt="" 
                // style={{ 
                //     width: '100%',  /* Adjust as needed */
                //     height: '300px',  /* Keeps the aspect ratio */
                //     maxWidth: '100%', /* Set a maximum width if desired */
                //     display: 'block', /* Centers the image if container is centered */
                //     margin: '0 auto' /* Centers the image horizontally */
                // }}
            />


            <div className='shopcategory-indexsort'>
                <p>
                    <span>
                        Showing 1-12
                    </span> out of 36 products
                </p>
                <div className='shocategory-sort'>
                    Sort by <img src={down} />
                </div>
            </div>
            
            <div className='shopcategory-products'>
                
            {data_product2.map((item, i)=>{
                    if(item.category===props.category)
                        {
                            return < Item key={i} id={item.id} name={item.name}  image={item.image1} new_price={item.new_price} old_price={item.old_price}/>

                        }
                        else{
                            return null;
                        }
                })}
            </div>
                <div className='loadmore'>
                    Explore More
                </div>

        </div>
    );
}

export default ShopCategory;