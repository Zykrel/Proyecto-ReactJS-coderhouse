import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirData"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()
    useEffect(() => {
        setCargando(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter(prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [categoryId])
    return (
        <div>
            {
                cargando
                    ? <h2 className="text-center mt-5">Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </div>
    )
}