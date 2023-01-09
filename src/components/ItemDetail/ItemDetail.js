import React from 'react'

const ItemDetail = ({id, nombre, medida, imgSrc, precio, color, descripcion, category}) => {
    return (
<div className='container '>
    <div className='row'>
        <div className='col-6 mx-3'>
            <h5>{nombre} {medida} </h5>
            <img src={imgSrc} height="400"/>
            <p><strong>Categoria: </strong> {category}</p>
            <p><strong> Descripción: </strong>  {descripcion}</p>    
            <p><strong> Precio: </strong> ${precio}</p> 
            </div>
    </div>

            <h6 >{color}</h6>
            <br/>
</div>

    )
}

export default ItemDetail