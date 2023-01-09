import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import { useNavigate } from "react-router-dom"



const ItemDetail = ({ id, nombre, medida, imgSrc, precio, color, descripcion, category }) => {


    const navigate = useNavigate()

    const botonVolver = () => {
        navigate(-1)
    }


    return (
        <>
            <div className='col-7'>
                <h2>{nombre} {medida} </h2>
                <p><strong>Categoria: </strong> {category}</p>
                <img src={imgSrc} height="400" />
                <section className='mt-2'> <strong>Descripción: </strong> {descripcion}  </section>
                <p>{color}</p>
                <h4 className='mt-3'><strong> Precio: </strong> ${precio}</h4>
                <br />
                <button className="btn btn-outline-primary" onClick={botonVolver}>Volver</button>
                <button className="btn btn-primary m-3">Añadir al carrito</button>

            </div>

        </>

    )
}

export default ItemDetail