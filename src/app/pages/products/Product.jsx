"use client";

import Link from "next/link";
import "./product.css"
/*
MODIFICAR EN CASO DE SER NECESARIO
*/
function Product(props) {
    console.log(props)
    // onClick para agregar producto al carrito
    return (
        <li>
            <div>
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>{props.name}</h1>
                    <img src={props.image} alt={props.name} style={{ borderRadius: '15px' }} />
                    <p>{props.description}</p>
                    <p><strong>Precio:</strong> ${props.price}</p>
                    <p>Stock: {props.stock}</p>
                </div>
                <div>
                    <button>Agregar al carrito</button>
                    <Link href={`/products/description/${props._id}`} >
                        Detalle
                    </Link>
                </div>
            </div>
        </li>
    );
}

export default Product;
