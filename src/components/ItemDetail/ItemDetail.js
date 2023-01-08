import React from 'react'

const ItemDetail = ({id, nombre, medida, imgSrc, precio, color, descripcion, category}) => {
    return (
        <div>
            <h5>{nombre} {medida} </h5>
            <img src={imgSrc} height="400"/>
            <h6 >{color}</h6>
            <br/>
            <p><strong>Categoria: </strong> {category}</p>
            <p><strong> Descripción: </strong>  {descripcion}</p>
            <p><strong> Precio: </strong> ${precio}</p>
        </div>

    )
}

export default ItemDetail