import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productoRef = doc(db, "productos", id);

        getDoc(productoRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const productoData = docSnapshot.data();
                const id = docSnapshot.id;
                const productoConId = { ...productoData, id };
                setProducto(productoConId);
            } else {
                console.log("Producto no encontrado");
            }
        }).finally(() => {
            setLoading(false);
        });

    }, [id]);

    return (
        <div className='itemDetailContainer'>
            {loading ? (
                <div style={{ margin: "50px" }} className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <ItemDetail producto={producto} />
            )}
        </div>
    );
}
