import { useCartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import { Col, Row } from "react-bootstrap"

const Cart = () => {
    const { cart, carritoVacio, totalDelCarrito, removerItem } = useCartContext()
    const handleRemover = (id) => {
        removerItem(id)
    }
    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2><strong> Tu carrito está vacío</strong></h2>
                <hr />
                <Link to="/" className="btn btn-outline-primary">Volver al Inicio</Link>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2>Productos Seleccionados</h2>
            <hr />
            {
                cart.map(item => (
                    <Row key={item.id}>
                        <Col lg={2}><img height="180" src={item.imgSrc} /></Col>
                        <Col lg={4} className="my-5"><span><strong>{item.nombre} {item.medida}</strong></span></Col>
                        <Col lg={1} className="my-5"><span> <strong>{item.cantidad}</strong></span></Col>
                        <Col lg={2} className="my-5"><span><strong>${item.precio * item.cantidad}</strong></span> </Col>
                        <Col lg={2}><button onClick={() => handleRemover(item.id)} className="btn btn-danger my-5">Remover Producto</button></Col>
                        <hr />
                    </Row>
                ))
            }
            <h4><strong>Total de los productos: ${totalDelCarrito()} </strong></h4>
            <Link to="/" className="btn btn-outline-danger mt-3 mx-5" onClick={carritoVacio}>Vaciar carrito</Link>
            <Link to="/checkout" className="btn btn-outline-info mt-3 ">Terminar Compra</Link>
        </div>
    )
}

export default Cart
