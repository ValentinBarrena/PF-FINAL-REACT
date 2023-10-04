import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Cart = () => {
  const { cart, limpiarCarrito, removerItem } = useContext(CartContext);
  const precioTotal = cart.reduce((total, item) => {
    return total + item.precio * item.cant;
  }, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h2 style={{ margin: "50px" }}>El carrito está vacío</h2>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <div className="d-grid gap-2 col-4 mx-auto">
              <button className="btn btn-success" type="button">Volver al catálogo</button>
            </div>
          </Link>
        </>
      ) : (
        <div>
          <h2 className="card-title text-uppercase fw-bold" style={{ margin: "20px" }}>Carrito de compras</h2>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <h3 className="card-title text-uppercase fw-bold">{item.nombre}</h3>
                <h5 className="card-text text-uppercase fw-bold">Cantidad: {item.cant}</h5>
                <h5 className="card-text text-uppercase fw-bold">Precio unitario: ${item.precio}</h5>
                <h5 className="card-text text-uppercase fw-bold">Precio subtotal: ${item.precio * item.cant}</h5>
                <button onClick={() => removerItem(item.id)} className="btn btn-danger">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="btnCarrito">
        {cart.length >= 1 && (
          <>
            <h2 className="text-uppercase fw-bold">Precio Total de la compra: ${precioTotal}</h2>
            <div className="d-flex justify-content-center align-items-center" style={{ gap: "30px" }}>
              <button onClick={limpiarCarrito} className="btn btn-success">Limpiar Carrito</button>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <button className="btn btn-success">Volver al catálogo</button>
              </Link>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/checkout">
                <button className="btn btn-success">Finalizar compra</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
