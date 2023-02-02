import { useEffect, useState } from "react"
import {collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {db} from "../../firebase/config"
import { Spinner } from "react-bootstrap"
import { Col, Container, Row } from 'react-bootstrap'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        const productRef = collection(db, "productos" )
        setCargando(true)
        const quer = categoryId
                        ? query(productRef, where("category", "==", categoryId ))
                        : productRef
        getDocs(quer)
        .then((res) => {
            setProductos(res.docs.map((doc) => {
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }))
        }
        
        )
        .finally(
            setCargando(false)
        )
    }, [categoryId])
    return (
        <>
            {
            cargando
                    ? <Spinner animation="border" className="m-5"/>
                    : <ItemList productos={productos} />
            }
        </>
    )
}