import { doc} from 'firebase/firestore';

import { getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/client"


const ItemDetailContainer = () => {
    
    const {id} =useParams()
    const [producto,setProducto]= useState()
    const [loding,setLoading]=useState(true)

    //const {nombreCategoria}= useParams()

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


   //***********************


       
    return(
        //<img src={producto.image} alt="" />

        <div> 
            <h3>soy el producto {producto?.title}</h3>
          
            <h3>soy el producto {producto?.description}</h3>

            <img src={producto?.image} alt="" style={{ width: '300px', height: 'auto' }} />

            
          
        </div>
    )
}

export default ItemDetailContainer