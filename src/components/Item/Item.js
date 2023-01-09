import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, medida, imgSrc, precio, color, category }) => {

    return (
            <div className="col-4 my-2">
                <div className="card cards">
                    <img src={imgSrc} className="card-img-top img-medida" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title txt-center">{nombre} {medida} </h5>
                        <p className="txt-center">Categoria: {category} </p>
                        <h6 className="txt-center">{color}</h6>
                        <p className="card-text txt-center">Precio: ${precio}</p>
                        <Link to={`/Proyecto-ReactJS-coderhouse/detalles/${id}`} className="btn btn-outline-danger d-flex justify-content-center">Ver más</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item
