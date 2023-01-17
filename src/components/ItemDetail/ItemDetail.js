import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ id, nombre, medida, imgSrc, precio, color, descripcion, stock, category }) => {

    const { agregarAlCarrito, estaEnElCarrito } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const botonVolver = () => {
        navigate(-1)
    }


    const agregarProductoCarrito = () => {
        const product = {
            id,
            nombre,
            medida,
            color,
            imgSrc,
            precio,
            descripcion,
            stock,
            category,
            cantidad,
        }

        agregarAlCarrito(product)
    }


    return (
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src={imgSrc} height="400" />
            </div>
            <div className='col-6 mt-5'>
                <h2>{nombre} {medida} </h2>
                <p><strong>Categoria: </strong> {category}</p>
                <section className='mt-2'> <strong>Descripción: </strong> {descripcion}  </section>
                <p>{color}</p>
                <h4 className='mt-3'><strong> Precio: </strong> ${precio}</h4>
                <button className="btn btn-outline-primary mb-3" onClick={botonVolver}>Atras</button>
                <br />
            </div>

            {
                !estaEnElCarrito(id)
                    ? <ItemCount
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        max={stock}
                        agregar={agregarProductoCarrito}
                    />
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }

        </div>

    )
}

export default ItemDetail