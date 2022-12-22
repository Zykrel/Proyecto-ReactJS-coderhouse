import "./Item.css"

const Item = ({ id, nombre, medida, imgSrc, precio, color }) => {

    return (
            <div className="col-4 my-2">
                <div className="card cards">
                    <img src={imgSrc} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title txt-center">{nombre} {medida} </h5>
                        <h6 className="txt-center">{color}</h6>
                        <p className="card-text txt-center">${precio}</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-outline-danger"> Agregar al Carrito </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item
