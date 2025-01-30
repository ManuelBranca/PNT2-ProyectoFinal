import "./product.css";
import Product from "./Product";

const ProductsList = (props) => {
  return (
    <ul>
      {props.products.map((producto) => (
        <Product
          key={producto._id} // Agregar key única
          _id={producto._id} // Pasar _id correctamente
          image={producto.image}
          name={producto.name}
          description={producto.description}
          price={producto.price}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
