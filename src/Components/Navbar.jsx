import './CartWidget'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

export default function Navbar() {

return (
    <nav className="navbar">
        <Link to="/"><img className='logoPagina navbar-brand' src="../img/vite.svg" alt="" /></Link>
        <ul className="nav">
            <li className='nav-item'><Link className='nav-link' to="/category/aridos"><h6 className="text-uppercase">Áridos</h6></Link></li>
            <li className='nav-item'><Link className='nav-link' to="/category/bolsas"><h6 className="text-uppercase">Bolsas</h6></Link></li>
            <li className='nav-item'><Link className='nav-link' to="/category/hidrofugos"><h6 className="text-uppercase">Hidrófugos</h6></Link></li>
            <li className='nav-item'><Link className='nav-link' to="/category/ladrillos"><h6 className="text-uppercase">Ladrillos</h6></Link></li>
            <li className='nav-item navCompUltimo'><Link className='nav-link' to="/category/hierros"><h6 className="text-uppercase">Hierros</h6></Link></li>
        </ul>
        <CartWidget/>
    </nav>
    )
}