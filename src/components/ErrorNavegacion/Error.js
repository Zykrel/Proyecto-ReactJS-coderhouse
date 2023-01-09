import React from 'react'

const Error = () => {
return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 mt-3 text-center'>
                <h1>No se encuentran resultados</h1> 
                <Link to={"/"} className="btn btn-outline-danger d-flex justify-content-center">Volver a Inicio</Link>
            </div>
        </div>
    </div>
)
}

export default Error