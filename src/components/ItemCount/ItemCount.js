import React from 'react'

const ItemCount = ({cantidad, setCantidad, max, agregar}) => {

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 offset-7'>
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
                                className={`btn btn-${cantidad < max ? 'primary' : 'danger'}`}
                                disabled={cantidad === max}
                            >
                                +
                            </button>
                                <button className="btn btn-outline-primary mx-5 my-3" onClick={agregar}>Agregar al carrito</button>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default ItemCount