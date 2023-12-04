import { useParams } from "react-router-dom";

const ThankYou = () => {
  const { orderId } = useParams();
  return (
    <>
      <div>
        <h1>Su Compra fue efectuada correctamente.</h1>
        <p>Conserve este número de seguimiento: {orderId}</p>
      </div>
    </>
  );
};
export default ThankYou;

//-------------------
