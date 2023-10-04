import { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount";
import { CartContext } from "../Context/cartContext";
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemDetail = ({ producto }) => {  
  const [quantity, setQuantity] = useState(1);
  const { cart, addItem } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addItem(producto, quantity);
  };

  return (
    <div className="container" style={{marginTop : "20vh"}}>
  <div className="row">
    <div className="col-md-4 text-center">
      <img src={producto.imagen} width={300} alt="" className="img-fluid" />
    </div>
    <div className="col-md-8">
      <h2 className="text-uppercase fw-bold">{producto.nombre}</h2>
      <p className="fst-italic fw-bold">{producto.descripcion}</p>
      <h5 className="text-uppercase fw-bold">Precio: ${producto.precio}</h5>
      <div>
        <ItemCount
          onQuantityChange={handleQuantityChange}
          initialQuantity={quantity}
        />
        <div className="btn-container d-flex justify-content-center mt-3" style={{display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px"}}>
          <button className="btn btn-success" onClick={handleAddToCart}>Agregar al carrito</button>
          {quantity > 0 && (
            <Link to="/cart">
              <button className="btn btn-success">Finalizar compra</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ItemDetail;