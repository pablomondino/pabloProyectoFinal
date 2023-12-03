import { doc} from 'firebase/firestore';

import { getDoc } from "firebase/firestore"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/client"

import { CartContext } from '../../context/cartContext';
const ItemDetailContainer = () => {
    
    const {id} =useParams()
    const [producto,setProducto]= useState()
    const [loding,setLoading]=useState(true)

    const [cantidad, setCantidad] = useState(1);

    //const {nombreCategoria}= useParams()

     // Acceder al contexto
  const { addToCart } = useContext(CartContext);

   //*********************
   useEffect(() => {
    if (id) {
        const productRef = doc(db, "products", id);

        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducto({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                }
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    }
}, [id]);

const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
};

const decrementarCantidad = () => {
    if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
};

const agregarAlCarrito = () => {
    // Lógica para agregar el producto al carrito con la cantidad seleccionada
    // ...
     // Verifica si el producto y la cantidad son válidos antes de agregar al carrito
     if (producto && cantidad > 0) {
        addToCart(producto, cantidad);
        // Puedes agregar un mensaje de éxito o redirigir al usuario a la página del carrito
};
};
return (
    <div>
        <h3>{producto?.title}</h3>
        <p>{producto?.description}</p>
        <img src={producto?.image} alt="" style={{ width: '300px', height: 'auto' }} />
        <p>Cantidad: {cantidad}</p>
        <button onClick={decrementarCantidad}>-</button>
        <button onClick={incrementarCantidad}>+</button>
        <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
);



   //***********************


    /*   
    return(
        //<img src={producto.image} alt="" />

        <div> 
            <h3>soy el producto {producto?.title}</h3>
          
            <h3>soy el producto {producto?.description}</h3>

            <img src={producto?.image} alt="" style={{ width: '300px', height: 'auto' }} />

            
          
        </div>
    )
  */
}

export default ItemDetailContainer