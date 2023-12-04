import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { Spin } from "antd";
import Item from "../item/item";
import { Link, useParams } from "react-router-dom";

import { db } from "../../firebase/client";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { nombreCategoria } = useParams();

  const [loding, setLoading] = useState(true);

  console.log(nombreCategoria);

  const order = {
    buyer: { name: "pablo", phone: "333333", email: "pablo@gmail.com" },
    items: [
      {
        categoryId: "sillas",
        description: "silla tablero",
        imagen: "",
        price: 5000,
        stock: 100,
        title: "silla torneada",
      },
      {
        categoryId: "sillas",
        description: "silla tres ondas",
        imagen: "",
        price: 5000,
        stock: 100,
        title: "silla torneada",
      },
    ],
    total: 10000,
  };
  const crearOrdenDeCompra = () => {
    const refOrder = collection(db, "orders");
    addDoc(refOrder, order).then(({ id }) => console.log(id));
  };

  useEffect(() => {
    const productsRef = nombreCategoria
      ? query(
          collection(db, "products"),
          where("categoryId", "==", nombreCategoria)
        )
      : collection(db, "products");

    getDocs(productsRef)
      .then((snapshot) => {
        console.log(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        //snapsot.docs va a ser un array con todos los documentos
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })

      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [nombreCategoria]);

  return (
    <>
      <div className={StyleSheet.container}>
        {/*estoe es comentario*/}
        <h2 className="saludo">{greeting}</h2>
        {/* 3) Recorrer el array de productos y mostrar nombre y precio */}
        {products.length > 0 ? (
          <>
            {products.map((pr) => (
              <Item key={pr.id} producto={pr} />
            ))}
          </>
        ) : (
          <Spin />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
