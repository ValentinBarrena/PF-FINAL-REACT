import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
    return (
        <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping imgCarrito"></i>
        </Link>
    )
}
