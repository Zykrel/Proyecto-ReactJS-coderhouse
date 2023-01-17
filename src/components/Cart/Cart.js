import { useCartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"

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
    console.log(cart)
    return (
        <div className="container my-5">
            <h2>Productos Seleccionados</h2>
                <hr/>
                {
                    cart.map(item => (
                            <div key={item.id}>
                            <h4>{item.nombre} {item.medida}</h4>
                            <img src={item.imgSrc}/>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.precio * item.cantidad}</p>
                            <hr/>
                        </div>
                    ))
                }

                <h4>Total: ${ totalDelCarrito() }</h4>
            
            <button className="btn btn-danger" onClick={carritoVacio}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
