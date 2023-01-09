import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import { useNavigate } from "react-router-dom"



const ItemDetail = ({ id, nombre, medida, imgSrc, precio, color, descripcion, category }) => {


    const navigate = useNavigate()

    const botonVolver = () => {
        navigate(-1)
    }


    return (
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src={imgSrc} height="400" />
            </div>
            <div className='col-6 mt-5'>
                <h2>{nombre} {medida} </h2>
                <h5 className='mt-3'><strong>Categoria: </strong> {category}</h5>
                <section className='mt-4'> <strong>Descripción: </strong> {descripcion}  </section>
                <p>{color}</p>
                <h4 className='mt-4'><strong> Precio: </strong> ${precio}</h4>
                <br />
                <button className="btn btn-outline-primary" onClick={botonVolver}>Volver</button>
                <button className="btn btn-primary m-3">Añadir al carrito</button>
            </div>
        </div>

    )
}

export default ItemDetail