import React from 'react'
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { useCartContext } from "../../CartContext/CartContext"
import { db } from "../../firebase/config"
import { Formik } from 'formik';

const Checkout = () => {
    const { cart, carritoVacio, totalDelCarrito } = useCartContext()
    const { ordenarId, setOrdenarId } = useState(null)

    const crearOrden = async (values) => {
        const ordenes = {
            cliente: values,
            item: cart,
            total: totalDelCarrito()
        }
        const batches = writeBatch(db)
        const ordenesRef = collection(db, "ordenes")
        const productosRef = collection(db, 'productos')

        const outOfStock = []
        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(product => product.id)))
        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batches.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            batches.commit()
            .then(() => {
                addDoc( ordenesRef, ordenes)
                .then((doc) =>{
                    setOrdenarId(doc.id)
                    carritoVacio()
                })
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No hay stock en este producto!',
                })
        }
    }
    if(ordenarId){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <h2>Tu compra ha sido exitosa</h2>
                    <hr/>
                    <p>Tu código de orden es: {ordenarId}</p>
                    <Link className='btn btn-outline-info' to="/">Volver</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <h2>Terminar mi compra</h2>
                </div>
            </div>
        </div>
    )
}

export default Checkout