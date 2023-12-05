import { Link } from "react-router-dom";

import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";

import "../../App.css";

const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const { numero } = useContext(CartContext);
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  //---
  const calcularTotal = () => {
    return producto.price * cantidad;
  };

  //------
  return (
    <div className="product-container">
    <div className="product-details">
      <p>{producto.title}</p>
      <p>{producto.description}</p>
    </div>

    <img
      src={producto.image}
      alt=""
      className="product-image"
    />

    <p className="product-price">Precio: ${producto.price}</p>

    <div className="product-quantity">
      <p>Cantidad: {cantidad}</p>
      <div className="product-buttons">
        <button onClick={decrementarCantidad}>-</button>
        <button onClick={incrementarCantidad}>+</button>
      </div>
    </div>

    <p className="product-total">Total: ${calcularTotal()}</p>

    <Link to={`/item/${producto.id}`}>Ver más</Link>

    <button onClick={() => addToCart(producto, cantidad)}>
      Agregar al carrito
    </button>
  </div>
  );
};

export default Item;
