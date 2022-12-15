import Carrito from '../../assets/img/compras.png'
import Navbar from 'react-bootstrap/Navbar';
import './CartWidget.css'


export const CartWidget = () =>{
    return (
        <Navbar.Collapse className="justify-content-end" href="#">
        <img
            alt="logo"
            src={Carrito}
            height="60"
        /><span className='carritoCantidad text-light btn-danger d-block'>1</span>
    </Navbar.Collapse>
    )
}