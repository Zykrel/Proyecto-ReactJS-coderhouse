import React from 'react'

const ItemCount = ({cantidad, setCantidad, max, agregar}) => {

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button 
                onClick={restar} 
                className={`btn btn-outline-${cantidad > 1 ? 'primary' : 'danger'}`}
                disabled={cantidad === 1}
            >
                    -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button 
                onClick={sumar} 
                className={`btn btn-${cantidad < max ? 'success' : 'danger'}`}
                disabled={cantidad === max}
            >
                +
            </button>
            <br/>
            <button className="btn btn-success my-3" onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount