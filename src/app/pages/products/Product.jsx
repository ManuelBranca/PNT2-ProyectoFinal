"use client";

import Link from "next/link";
import "./product.css";

function Product(props) {
  return (
    <li className="product-item">
      <div className="card product-item__content">
        <Link href={`/pages/products/${props._id}`}>
          <div className="product-item__image">
            <img
              src={props.image}
              alt={props.name}
              className="product-item__img"
            />
          </div>
          <div className="product-item__info">
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <p>
              <strong>Precio:</strong> ${props.price}
            </p>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default Product;
