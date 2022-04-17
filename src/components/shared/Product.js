import React from 'react';

//Functions
import { shorten } from '../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product"  />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>details</a>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Product;