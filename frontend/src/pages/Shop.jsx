import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollections from '../components/newcollections/NewCollections';
import NewsLetter from '../components/newsletter/NewsLetter';
const Shop = ()=>{
    return(
        <>
       <Hero/>
       <Popular />
       <Offers />
       <NewCollections />
       <NewsLetter />
       
        </>
    )
}

export default Shop;