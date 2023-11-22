import { Button } from "antd"
import { useEffect, useRef, useState } from "react"
import {Spin} from 'antd';
import Item from "../item/item";
import { Link, useParams, } from "react-router-dom";
//esto estoy agregando
import { db } from "../../firebase/client";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
//import { getDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
//import { useParams } from "react-router-dom";
//import { query, where } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
   const {nombreCategoria} = useParams()

    const [loding,setLoading]=useState(true)

    console.log(nombreCategoria)
 

    // Crear una promise que devuelva un array de productos con el siguiente formato:
    // {name: "producto1", precio: 2000, id: 1}. IMPORTANTE: El ID no puede repetirse
    // Simular tiempo de espera

    // Cuando el componente se monte hacer la peticion a la promise, guardar la data y mostrarla.
    // NOTA: Mostrar nombre y precio

   // 1) Crear la Promise

   /* SACO PROMESA
    const promesa = new Promise((resolve, reject) => {
        const productosArray = [
            {name: "Remera", precio: 20000, id: 1},
            {name: "Pantalon", precio: 12500, id: 2},
            {name: "Buzo", precio: 35000, id: 3},
            {name: "Campera", precio: 55500, id: 4}
        ]

        setTimeout(() => {
            productosArray.length > 0 ? resolve(productosArray) : reject({data: [], message: "No hay productos"})
        }, 5000)
    })
*/

    // 2) Llamar a la promise y guardar su resultado... Acuerdense:
    // QUE ESTAN TRABAJANDO CON REACT. 
    useEffect(() => {




        /* va con esto para un productp
        const productRef= doc(db,"products", "8xPr3d2J2nOFIRitdCBd")
        getDoc(productRef)
        .then((snapshot)=>{
            if (snapshot.exists()){
                console.log(
                    {id:snapshot, ...snapshot.data()})
                    setProducts({id:snapshot, ...snapshot.data()}) 
            }
        }*/


            // -***esto es para importar varios
        const productsRef = nombreCategoria ? query(
            collection(db,"products"),
            where("categoryId", "==", nombreCategoria)
    )
        : collection(db, "products") 

       // const productsRefFilter = 

      
       
        getDocs(productsRef)
      


        .then(snapshot => {

            console.log(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
           //snapsot.docs va a ser un array con todos los documentos
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))

        })

        .catch(e => console.error(e))
        .finally(()=>setLoading(false))
            
        //para hacer query
      /*
        const productsRefFilter = query(
            collection(db,"products"),
            where("categoryId", "==", "sillas")
        )


        getDocs(productsRefFilter)
      


        .then(snapshot => {

            console.log(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))

        })

        .catch(e => console.error(e))
        */




        /*
        promesa
        .then(res => {
            console.log(res)
            setProducts(res)
        })
        .catch(error => console.error(error.message))
        */
        //saco lo que sigue que era para conectar a la api
        /*
        fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                setProducts(json)})
            .catch(error => console.error(error))
         */

       /* va con esto para un producto
        )}
       */
            }
        , [nombreCategoria])


    return(
        <div className={StyleSheet.container}>
         {/*estoe es comentario*/}  
            <h2 className="saludo">{greeting}</h2>
            {/* 3) Recorrer el array de productos y mostrar nombre y precio */}
            {products.length > 0 ? (
                <>
                {products.map((pr) => <Item key={pr.id} producto={pr} />)}
                </>
            ) : (
                <Spin />
            )}
            <>
            </>
        </div>
    )
}

export default ItemListContainer
