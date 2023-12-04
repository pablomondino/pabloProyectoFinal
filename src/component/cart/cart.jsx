//import { Link } from "react-router-dom"
//ver porque este componente lo copie de bienvenida
//agrego 
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
//import cartItem 
import { Link } from 'react-router-dom';

//const Cart = () => {
const Cart = () => {
    const { cart, cartLength, calcularTotalCompra } = useContext(CartContext);

   //comente estosaque esto de aca
    
/*
    const calcularTotalCompra = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
*/
    return (
        /*
                <>
                
                   
                    <h1>CARRITO Tienda La Pietá</h1>
                    {cartLength > 0 ? (
                        <ul>
                            {cart.map((product, index) => (
                                <li key={index}>
                                    {product.title} - ${product.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>El carrito está vacío.</p>
                    )}
        
        
        
                </>
                */
               //comento lo que sigue
        
        /*
        <>
            <h1>CARRITO Tienda La Pietá</h1>
            {cartLength > 0 ? (
                <ul>
                    {cart.map((cartItem, index) => (
                        <li key={index}>

                            {cartItem.title} - ${cartItem.price} - Cantidad: {cartItem.quantity} - Total: ${cartItem.price * cartItem.quantity}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </>

        */
       /*
        <>
        <h1>CARRITO Tienda La Pietá</h1>
        {cartLength > 0 ? (
          <div>
            <ul>
              {cart.map((cartItem, index) => (
                <li key={index}>
                  {cartItem.title} - ${cartItem.price} - Cantidad: {cartItem.quantity} - Total: ${cartItem.price * cartItem.quantity}
                </li>
              ))}
            </ul>
            <p>Total de la compra: ${calcularTotalCompra()}</p>
            <Link to="/checkout">
              <button>Finalizar Compra</button>
            </Link>
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
        </>
            */

        <>
      <h1>CARRITO Tienda La Pietá</h1>
      {cartLength > 0 ? (
        <div>
          <ul>
          {cart.map((cartItem, index) => (
                <li key={index}>
                  {cartItem.title} - ${cartItem.price} - Cantidad: {cartItem.quantity} - Total: ${cartItem.price * cartItem.quantity}
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
    )

}
export default Cart