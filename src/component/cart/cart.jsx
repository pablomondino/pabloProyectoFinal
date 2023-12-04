import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartLength, calcularTotalCompra } = useContext(CartContext);

  return (
    <>
      <h1>CARRITO Tienda La Pietá</h1>
      {cartLength > 0 ? (
        <div>
          <ul>
            {cart.map((cartItem, index) => (
              <li key={index}>
                {cartItem.title} - ${cartItem.price} - Cantidad:{" "}
                {cartItem.quantity} - Total: $
                {cartItem.price * cartItem.quantity}
              </li>
            ))}
          </ul>
          <p>Total de la compra: ${calcularTotalCompra()}</p>
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
          <Link to="/checkout">
            <button>Crear Orden de Compra</button>
          </Link>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </>
  );
};
export default Cart;
