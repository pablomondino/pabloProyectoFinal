import { createContext } from "react";
import { useState, useEffect } from "react";

const mockProductos = [{
    titulo: 'Remera',
    precio: 6000,
    descripcion: 'lorem ipsum lorem ipsum'
},
{
    titulo: 'Pantalon',
    precio: 12000,
    descripcion: 'lorem ipsum lorem ipsum'
},
{
    titulo: 'Buzo',
    precio: 18000,
    descripcion: 'lorem ipsum lorem ipsum'
}]


// Creamos el contexto con createContext
//export const ShopContext = createContext(); 
export const CartContext = createContext();


// Creamos un componente para nuestro contexto
const CartComponentContext = ({ children }) => {
    
    
    
    // agrego numero y setNumero
    const [productos, setProductos] = useState([])

    const [cart, setCart] = useState([])
//nuevo
/*
const addToCart = (product, quantity) => {
    const cartItem = { ...product, quantity };
    setCart([...cart, cartItem]);
  };
*/
//--------------------------

//nuevo 1
const addToCart = (product, quantity) => {
    const existingCartItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingCartItemIndex !== -1) {
      // El producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agrégalo
      const cartItem = { ...product, quantity };
      setCart([...cart, cartItem]);
    }
  };




//---------




/*
    const addToCart = (product) => {
        setCart([...cart, product]);
      };
  */  
      const getCart = () => {
        return cart;
      };
    
//hasta aca nuevo

    //agregue
    const [numero, setNumero] = useState([2])
    const limpiarProductos = () => {
        setProductos([])
    }
    //agrego funcion
    const suma = () => {
        setNumero(numero + 1)
    }

    //----------------------------------
    
    
    //arego nuevo para calcular total

    const calcularTotalCompra = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };



    //---------------------------------

    useEffect(() => {
        setProductos(mockProductos)
    }, [])
    //aca agrego numero setNumero y suma
    return (
       
     <CartContext.Provider value={{ productos, numero, setNumero, cart, suma, calcularTotalCompra, addToCart, cartLength: cart.length }}>
     {children}
   </CartContext.Provider>

    )
    



    
}

export default CartComponentContext


/*
 <CartContext.Provider value={{ productos, numero, setNumero, suma }}>
            {children}
        </CartContext.Provider>

*/




// estaba así pero ahora lo exporto por default
/*
export const CartComponentContext = ({children}) => {

    const [productos, setProductos] = useState([])

    const limpiarProductos = () =>{
        setProductos([])
    }

    useEffect(() => {
        setProductos(mockProductos)
    }, [])

    return <CartContext.Provider value={{productos}}>
        {children}
    </CartContext.Provider>
}


*/
