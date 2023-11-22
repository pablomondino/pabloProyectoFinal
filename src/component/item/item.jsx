import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext"
import { useContext } from "react"
//import { useContext } from "react"
const Item = ({ producto }) => {
    const { addToCart } = useContext(CartContext);
    const{numero}=useContext(CartContext)
    return (
        //<img src={producto.image} alt="" />
        <div>
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <p>{numero}</p>
            <img src={producto.image} alt="" style={{ width: '200px', height: 'auto' }} />
            
            <Link to={`/item/${producto.id}`}>Ver más</Link>
            {/* Botón para agregar al carrito */}
            <button onClick={() => addToCart(producto)}>Agregar al carrito</button>

        </div>
    )
}

export default Item