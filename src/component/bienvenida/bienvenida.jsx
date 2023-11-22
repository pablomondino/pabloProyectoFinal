import { Link } from "react-router-dom"


const Bienvenida = () => {
    return (

        <>

            <h1> Hola! Bienvenidos a Tienda La Pietá </h1>
            <Link to={"/"}> Ir a productos </Link>
        </>
    )

}
export default Bienvenida