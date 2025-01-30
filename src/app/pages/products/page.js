"use client";

import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

const ProductsPage = (props) => { // Cambié `function` por `const` para usar la declaración de función flecha
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products/getProducts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
}

export default ProductsPage;
