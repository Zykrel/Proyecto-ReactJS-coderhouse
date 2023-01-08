import React from 'react'

const ItemDetail = ({id, nombre, medida, imgSrc, precio, color, descripcion}) => {
    return (
        <div>
            <h5>{nombre} {medida} </h5>
            <img src={imgSrc}/>
            <h6 >{color}</h6>
            <br/>
            <p>{descripcion}</p>
            <p>${precio}</p>
        </div>

    )
}

export default ItemDetail