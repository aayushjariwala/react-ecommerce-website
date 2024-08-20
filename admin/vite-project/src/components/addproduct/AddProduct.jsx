import React, { useState } from 'react';
import './AddProduct.css';
import uploadimg from '../../assets/image-.png';

const AddProduct = () => {
    const [images, setImages] = useState([null, null, null]);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image1: '',
        image2: '',
        image3: '',
        category: '',
        new_price: '',
        old_price: '',
    });

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const imageHandler = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    };

    const Add_Product = async () => {
        try {
            let imageUrls = [];

            for (let i = 0; i < images.length; i++) {
                if (images[i]) {
                    const formData = new FormData();
                    formData.append('product', images[i]);

                    const response = await fetch('http://localhost:4000/upload', {
                        method: 'POST',
                        body: formData,
                    });

                    if (!response.ok) {
                        throw new Error('Failed to upload image');
                    }

                    const responseData = await response.json();
                    imageUrls.push(responseData.image_url);
                } else {
                    imageUrls.push('');
                }
            }

            const product = {
                ...productDetails,
                image1: imageUrls[0],
                image2: imageUrls[1],
                image3: imageUrls[2],
            };

            const addProductResponse = await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (!addProductResponse.ok) {
                throw new Error('Failed to add product');
            }

            const responseData = await addProductResponse.json();
            if (responseData.success) {
                alert('Product added successfully');
            } else {
                throw new Error('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        }
    };

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Type here"
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name="old_price"
                        placeholder="Type Here"
                    />
                </div>

                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name="new_price"
                        placeholder="Type Here"
                    />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className="addproduct-selector"
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>

            {/* Render image previews and file inputs for each image */}
            <div className="addproduct-itemfield">
                {images.map((image, index) => (
                    <div key={index}>
                        <label htmlFor={`file-input-${index}`}>
                            <img
                                src={image ? URL.createObjectURL(image) : uploadimg}
                                className="addproduct-image-thumbnail"
                                alt={`Preview ${index + 1}`}
                            />
                        </label>
                        <input
                            onChange={(e) => imageHandler(e, index)}
                            type="file"
                            name={`image${index + 1}`}
                            id={`file-input-${index}`}
                            hidden
                        />
                    </div>
                ))}
            </div>

            <button onClick={Add_Product} className="addproduct-addbutton">
                ADD
            </button>
        </div>
    );
};

export default AddProduct;
