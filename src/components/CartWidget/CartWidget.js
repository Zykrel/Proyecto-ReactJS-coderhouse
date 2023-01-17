import CarritoImg from '../../assets/img/compras.png'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../CartContext/CartContext'
import './CartWidget.css'




export const CartWidget = () => {

    const {totalCantidad} = useCartContext()

    return (
        <>
        <NavLink to="/cart">
                <img
                    alt="logo"
                    src={CarritoImg}
                    height="60"
                />  
            </NavLink>
                <span className='carritoCantidad text-light'>{totalCantidad()}</span>

            </>
    )
}