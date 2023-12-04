import { Link } from "react-router-dom"
//import { useContext } from "react"
//import { CartContext } from "../../context/cartContext"
//import cartItem 

//me decia que ponga esto

//import React, { useContext, useState } from 'react';
//import { CartContext } from '../../context/cartContext';

//yo puse esto
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";


const Checkout = () => {
    //const history = useHistory();
    const navigate = useNavigate();
    // agrego 
    const { cart, calcularTotalCompra } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        // Agrega más campos según sea necesario
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    /*
    const handleSubmit = (e) => {
        e.preventDefault();

        //agrego esto falta la ruta
        const numeroDeSeguimientoGenerado = '123456'; // Reemplaza esto con el número real obtenido
        navigate(`/confirmacion/${numeroDeSeguimientoGenerado}`);
        //navigate('/ruta-a-la-que-quieres-redirigir');
        // Aquí puedes enviar los datos del formulario, como formData, cart y totalCompra, a tu base de datos Firebase
        // Por ejemplo, podrías utilizar Firestore para guardar la información del pedido.

        console.log('Formulario enviado:', formData);
        console.log('Productos en el carrito:', cart);
        console.log('Total de la compra:', totalCompra);
        // Luego puedes redirigir al usuario a una página de agradecimiento o confirmación.
        //agregamos codigo
        addDoc(refOrder, order)
            .then((docRef) => {
                console.log("Order ID:", docRef.id);
                // Guarda el ID en el estado o haz lo que necesites con él
            })
            .catch((error) => console.error("Error adding document: ", error));

        //fin agregado



    };

    //------hasta aca

    */
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
      
          // Puedes redirigir al usuario a la página de agradecimiento con el orderId
          navigate(`/confirmacion/${orderId}`);
        } catch (error) {
          console.error("Error al crear la orden:", error);
        }
      };

    return (
        /*
        <>

            <h1>  Checkout </h1>

            <h2>formulario contacto</h2>
            
        </>
        */
        <>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Dirección:
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </label>
                {/* Agrega más campos según sea necesario */}
                <br />
                <button type="submit">Finalizar Compra</button>
            </form>
        </>

    )

}
export default Checkout