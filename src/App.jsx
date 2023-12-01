import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import NavBar from './component/navBar/navBar'
import ItemListContainer from './component/itemListConteiner/itemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Bienvenida from './component/bienvenida/bienvenida'
import NotFound from './component/notFound/notFound'
import ItemDetailConteiner from './component/itemDetailContainer/itemDetailContainer'
import Cart from './component/cart/cart'
//import NavBar1 from './component/navbar1/navbar1'
import  CartComponentContext  from './context/cartContext'
import NavBar from './component/navBar/navBar'
import NavBar1 from './component/navbar1/navbar1'
import Checkout from './component/checkout/chechout'

//import { CartComponentContext } from './context/cartComponentContext';
function App() {
  const [count, setCount] = useState(0)
  //    <ItemListContainer greeting="Bienvenido a Tienda La Pietá"/>

  return (
    <CartComponentContext>





    <>
      <BrowserRouter basename="/pabloProyectoFinal">
        <h2>TIENDA LA PIETÁ</h2>
        <NavBar1 />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a Tiendas La Pietá" />} />
         
          <Route exact path="/categoryId/:nombreCategoria" element={<ItemListContainer greeting="categorias" />} />

          <Route exact path="/bienvenida" element={<Bienvenida />} />
          
          {/*   <Route exact path="/checkout" element={<otroelementocheckout/>} /> */}
          <Route path="/item/:id" element={<ItemDetailConteiner />} />

          <Route path="/cart" element={<Cart/>} />
         {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/checkout" element={<Checkout/>} />


          <Route exact path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>





    </>
    </CartComponentContext>
  )
}

export default App
