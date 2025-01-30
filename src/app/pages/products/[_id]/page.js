"use client";

import { use, useState, useEffect } from "react";
import Product from "../Product";

export default function DetalleProducto({ params }) {
  const { _id } = use(params); // Desempaquetamos params usando use()

  const [product, setProduct] = useState({}); // Estado para almacenar el producto

  useEffect(() => {
    fetch(`/api/products/${_id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Verifica qué llega desde el backend
      const productoEncontrado = data.find((product) => product._id === _id);
      console.log(productoEncontrado); // Verifica si encontró el producto
      setProduct(productoEncontrado); // Almacena el producto
    })
    .catch((error) => console.log(error));
  
  }, [_id]); // Dependencia para ejecutar el efecto cuando cambie `_id`



  return (
    <>
      <p>ID: {_id}</p> {/* Mostrar el ID en un párrafo */}
      <p>Nombre: {product.name}</p> {/* Mostrar el nombre */}
      <p>Descripción: {product.description}</p> {/* Mostrar la descripción */}
      <p>Precio: ${product.price}</p> {/* Mostrar el precio */}
      <Product
        name={product.name}
        description={product.description}
        price={product.price}
      />
    </>
  );
  
}
