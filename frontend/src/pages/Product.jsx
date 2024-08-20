import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/Breadcrums/BreadCrums';
import ShopContextProvider from '../context/ShopContext';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProduct from '../components/relatedproduct/RelatedProducts';


const Product = ()=>{

    const {data_product2} = useContext(ShopContext);
    const {productId} = useParams();
    const product = data_product2.find((e)=> e.id===Number(productId));



    return(
        <>
            <BreadCrums product={product} />
            <ProductDisplay  product={product}/>
            <DescriptionBox />
            <RelatedProduct/>
        </>
    )
}

export default Product;