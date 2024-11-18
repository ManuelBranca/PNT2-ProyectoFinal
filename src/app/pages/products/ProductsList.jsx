"use client";

import Product from "./Product";
import "./product.css"

const ProductsList = ({ products }) => {
    return (
        <ul>
            {products.map((product) => (
                <Product
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    stock = {product.stock}
                />
            ))}
        </ul>
    );
}

export default ProductsList;
