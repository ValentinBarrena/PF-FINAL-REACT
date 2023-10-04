import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ItemList({ productos }) {
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-md-4 mb-4">
                        <div className="item-card d-flex flex-column h-100 align-items-center">
                            <h3 className="text-uppercase fw-bold">{producto.nombre}</h3>
                            <img src={producto.imagen} width={170} height={150} alt="" />
                            <h5 style={{margin:"10px"}} className="text-uppercase fw-bold">${producto.precio}</h5>
                            <div className="mt-auto">
                                <button className="btn btn-success">
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/Item/${producto.id}`}>Ver detalles</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}