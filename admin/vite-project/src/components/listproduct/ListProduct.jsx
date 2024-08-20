import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import remove from '../../assets/remove.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const deleteProduct = async (id) => {
        try {
            await fetch('http://localhost:4000/removeproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            fetchInfo(); // Update product list after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setAllProducts(data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="listproduct">
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="listproduct-allproduct">
                {allProducts.map((product, index) => (
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <div className="listproduct-image-container">
                            <img className="listproduct-product-icon" src={product.image1} alt={`Product Image 1 for ${product.name}`} />
                            <img className="listproduct-product-icon" src={product.image2} alt={`Product Image 2 for ${product.name}`} />
                            <img className="listproduct-product-icon" src={product.image3} alt={`Product Image 3 for ${product.name}`} />
                        </div>
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img className="listproduct-removeicon" onClick={() => deleteProduct(product.id)} src={remove} alt="Remove" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
