import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, medida, imgSrc, precio, category }) => {

    return (
<div className="col-4 my-2">
                <div className="card">
                    <img src={imgSrc} height="400" className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title txt-center"><strong> {nombre} <br/> {medida}  </strong></h5>
                        <p className="txt-center"><strong> Categoria: {category} </strong>  </p>
                        <p className="card-text txt-center"><strong> Precio: ${precio} </strong></p>
                        <Link to={`/detalles/${id}`} className="btn btn-outline-primary d-flex justify-content-center">Más Detalles del Producto</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item
