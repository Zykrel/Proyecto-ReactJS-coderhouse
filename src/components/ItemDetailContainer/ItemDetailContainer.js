import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc} from "firebase/firestore"
import {db} from "../../firebase/config"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const refDoc = doc(db, "productos", itemId)
        getDoc(refDoc)
            .then((doc =>{
                setItem({ ...doc.data(), id: doc.id})
            })
            )

    }, [itemId])

    return (
        <div className="container">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer