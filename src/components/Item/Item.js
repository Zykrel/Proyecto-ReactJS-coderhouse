import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, medida, imgSrc, precio, color }) => {

    return (
            <div className="col-4 my-2">
                <div className="card cards">
                    <img src={imgSrc} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title txt-center">{nombre} {medida} </h5>
                        <h6 className="txt-center">{color}</h6>
                        <p className="card-text txt-center">${precio}</p>
                        <Link to={`/detalles/${id}`} className="btn btn-outline-danger">Ver más</Link>
                    </div>
                </div>
            </div>
    )
}

export default Item
