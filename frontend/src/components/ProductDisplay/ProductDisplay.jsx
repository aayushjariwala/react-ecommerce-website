import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star from "../assets/star.png";
import starl from "../assets/starl.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, data_product2 } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(product.image1); // Initial main image

  // Function to handle click on smaller images
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  // JSX for rendering the list of images
  const renderImages = (product) => {
    return (
      <>
        <img
          src={product.image1}
          alt="Product 1"
          onClick={() => handleImageClick(product.image1)}
        />
        <img
          src={product.image2}
          alt="Product 2"
          onClick={() => handleImageClick(product.image2)}
        />
        <img
          src={product.image3}
          alt="Product 3"
          onClick={() => handleImageClick(product.image3)}
        />
      </>
    );
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">{renderImages(product)}</div>

        <div className="productdisplay-mainimg">
          <img
            className="productdisplay-main-image"
            src={mainImage} // Use state variable for main image source
            alt="Main Product"
          />


          
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        
        <div className="productdisplay-right-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={starl} alt="" />
          <p>122</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          A light weight product pullover shirt close fitting and router nd
          newch sleebsd giving a hugt undershirt laptoip in mysterious garment.
        </div>

        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-rightsize">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XS</div>
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
