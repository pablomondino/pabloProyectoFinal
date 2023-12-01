import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext"
import { useContext, useState } from "react"


const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const { numero } = useContext(CartContext)
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  //---
  const calcularTotal = () => {
    return producto.price * cantidad;
  };


  //------
  return (
    //<img src={producto.image} alt="" />
    <div>
      <p>{producto.title}</p>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>{numero}</p>
      <p>Cantidad: {cantidad}</p>
      <p>Total: ${calcularTotal()}</p>
      <img src={producto.image} alt="" style={{ width: '200px', height: 'auto' }} />


      <button onClick={decrementarCantidad}>-</button>
      <button onClick={incrementarCantidad}>+</button>
      
      <Link to={`/item/${producto.id}`}>Ver más</Link>
      
      {/* Botón para agregar al carrito */}
      <button onClick={() => addToCart(producto, cantidad)}>
        Agregar al carrito
      </button>

    </div>
  )
}

export default Item