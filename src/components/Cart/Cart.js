import { useCartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
const Cart = () => {

const { cart, carritoVacio, totalDelCarrito } = useCartContext()


    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2><strong> Tu carrito está vacío</strong></h2>
                <hr/>
                <Link to="/" className="btn btn-outline-primary">Volver al Inicio</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2>Productos Seleccionados</h2>
                <hr/>
                {
                    cart.map(item => (
                            <div key={item.id}>
                            <h4>{item.nombre} {item.medida}</h4>
                            <img height="200" className="borders" src={item.imgSrc}/>
                            <p className="mt-2 mx-5"><strong> Cantidad: {item.cantidad}</strong></p>
                            <p className="mt-2 mx-5"><strong> Precio: ${item.precio * item.cantidad}</strong></p>
                            <hr/>
                        </div>
                    ))
                }

                <h4>Total: ${ totalDelCarrito() }</h4>
            
            <button className="btn btn-outline-danger mt-3 mx-5" onClick={carritoVacio}>Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-outline-info mt-3 ">Terminar Compra</Link>
        </div>
    )
}

export default Cart
