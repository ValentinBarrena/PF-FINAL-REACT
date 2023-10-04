import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../Context/cartContext";
import { serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState();
    const { cart, limpiarCarrito } = useContext(CartContext);
    const [error, setError] = useState([])

    const precioTotal = cart.reduce((total, item) => {
        return total + item.precio * item.quantity;
    }, 0);

    function handleNameChange(e) {
        const inputText = e.target.value;
        const filteredName = inputText.replace(/[^a-zA-Z ]/g, "");
        setName(filteredName);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        const inputText = e.target.value;
        const filteredPhone = inputText.replace(/[^0-9]/g, ""); // Permite solo números
        setPhone(filteredPhone);
    }


    function crearOrden() {
        if (!/^[a-zA-Z ]+$/.test(name)) {
            setError("El campo de nombre solo debe contener letras y espacios.");
            return;
        }
        if (!isValidEmail(email)) {
            setError(`El campo de email no es válido. Debes contener al menos "@" y ".com"`);
            return;
        }
        if (phone.length < 8) {
            setError("El número de teléfono debe tener al menos 8 caracteres.");
            return;
        }
        const db = getFirestore();
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
            items: cart.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                precioUnitario: item.precio,
                cantidad: item.cant,
            })),
            total: precioTotal,
            fecha: serverTimestamp(),
        };

        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, order)
            .then((result) => setOrderId(result.id))
            .catch((error) => {
                console.error("Error al agregar el documento:", error);
            });
    }

    function isValidEmail(email) {
        return /@.*\.com$/.test(email);
    }

    if (orderId) {
        return (
            <>
                <h2 style={{ margin: "50px" }}>{`Muchas gracias por tu compra, tu ID de compra es:`}</h2>
                <h2>{orderId}</h2>
                <Link style={{ textDecoration: "none", color: "inherit",}} to="/">
                    <div style={{margin:"50px"}} className="d-grid gap-2 col-4 mx-auto">
                        <button onClick={limpiarCarrito} className="btn btn-success" type="button">Volver al catálogo</button>
                    </div>
                </Link>
            </>
        );
    }

    return (
        <>
            <form style={{ margin: "20px" }}>
                <div className="form-group">
                    <label className="form-label">
                        <h5 className="text-uppercase fw-bold">Nombre</h5>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Ingrese un Nombre"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        <h5 className="text-uppercase fw-bold">Email</h5>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Ingrese un Email"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        <h5 className="text-uppercase fw-bold">Teléfono</h5>
                        <input
                            type="text"
                            className="form-control"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Ingrese un teléfono" />
                    </label>
                </div>
            </form>
            {error &&
                <p style={{ color: "red" }} >{error}</p>
            }
            <div className="d-grid gap-2 col-4 mx-auto">
            <button className="btn btn-danger" onClick={crearOrden}>Confirmar orden de compra</button>
            </div>
        </>
    );
}
