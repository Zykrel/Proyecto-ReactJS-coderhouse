import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { llamarPorId } from "../../helpers/PedirData"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        llamarPorId(Number(itemId))
            .then((data) => {
                setItem(data)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer