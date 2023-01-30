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
        <div className='container'>
            <div className='row'>
                <div className='col-3 offset-6'>
                    <button className="btn btn-outline-primary mt-3" onClick={botonVolver}>Atras</button>
                </div>
            </div>
            <div className='row'>
            <div className='col-6'>
                <img src={imgSrc} height="300"/>
            </div>
            <div className='col-6 mt-5'>
                <h2>{nombre} {medida} </h2>
                <p className="mt-4"><strong>Categoria: </strong> {category}</p>
                <section className='mt-4'> <strong>Descripción: </strong> {descripcion}  </section>
                <p>{color}</p>
                <h4 className='mt-5'><strong> Precio: </strong> ${precio}</h4>
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
                    :<div className='row'> 
                        <div className='col-3 offset-8'>    
                            <Link to="/cart" className="btn btn-primary mb-5">Terminar mi compra</Link>       
                        </div>  
                    </div> 
            }
            </div>

        </div>

    )
}

export default ItemDetail