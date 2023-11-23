//import { Link } from "react-router-dom"
//ver porque este componente lo copie de bienvenida
//agrego 
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
//import cartItem 


//const Cart = () => {
const Cart = () => {
    const { cart, cartLength } = useContext(CartContext);


    return (

        <>

            {/*<h1>  CARRITO  Tienda La Pietá </h1>*/}
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
    )

}
export default Cart