import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, calcularTotalCompra, limpiarCarrito } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: formData.name,
        email: formData.email,
        address: formData.address,
      },
      items: cart.map((item) => ({
        categoryId: item.categoryId,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        title: item.title,
      })),
      total: calcularTotalCompra(),
    };

    try {
      const orderRef = await addDoc(collection(db, "orders"), order);
      const orderId = orderRef.id;

      limpiarCarrito();
      setFormData({
        name: "",
        email: "",
        address: "",
      });

      navigate(`/confirmacion/${orderId}`);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Dirección:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <br />
        <button type="submit">Finalizar Compra</button>
      </form>
    </>
  );
};
export default Checkout;
