import { useState } from "react"

const ItemCount = ({ onQuantityChange }) => {

const [quantity, setQuantity] = useState(1)

const incrementar = () => {
    if(quantity < 10) {
        setQuantity(quantity + 1)
        onQuantityChange(quantity + 1)
    }
}

const decrementar = () => {
    if(quantity > 1) {
        setQuantity(quantity - 1)
        onQuantityChange(quantity - 1)
    }
}

return(
    <div style={{ marginTop: "30px"}}>
        <div className="d-flex justify-content-center align-items-center" style={{gap: "30px" }}>
            <button className="btn btn-success" onClick={decrementar}>-</button>
            <h2>{quantity}</h2>
            <button className="btn btn-success" onClick={incrementar}>+</button>
        </div>
    </div>
    )
}
export default ItemCount