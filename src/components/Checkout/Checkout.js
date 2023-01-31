import React from 'react'
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { useCartContext } from "../../CartContext/CartContext"
import { db } from "../../firebase/config"
import { Formik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap'
import * as Yup from 'yup';
import "./Checkout.css"

const schema = Yup.object().shape({
    nombre: Yup.string().min(5, 'Mínimo 5 caracteres').max(20, 'Máximo 20 caracteres').required('Campo requerido!'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(25, 'Máximo 25 caracteres').required('Campo requerido!'),
    email: Yup.string().email('El email no es válido').required('Campo requerido!')
})


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
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const sinStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(product => product.id)))

        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)
            if (doc.data().stock >= item.cantidad) {
                batches.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                sinStock.push(item)
            }
        })

        if(sinStock.length === 0){
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
            <Container>
            <Row>
                <Col lg={4}><h1>Tu Compra ha sido Realizada</h1></Col>
                <Col lg={4}><h3>Tu codigo es: {ordenarId}</h3></Col>
                <Link className='btn btn-outline-info' to="/">Volver</Link>
                </Row>
        </Container>
        )
    }
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    return (
        <Container>
            <Row>
                <Col className='text-center' lg={12}><strong><h1>Terminar Compra</h1></strong></Col>
            </Row>
            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    crearOrden(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control mb-3 mt-4"
                            onChange={handleChange}
                            type="text"
                            name="nombre"
                            value={values.nombre}
                            placeholder="Ingrese su nombre"
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <input
                            className="form-control mb-3"
                            onChange={handleChange}
                            type="text"
                            name="direccion"
                            value={values.direccion}
                            placeholder="Ingrese su dirección"
                        />
                        {errors.direccion && <p>{errors.direccion}</p>}
                        <input
                            className="form-control mb-3"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Ingrese el email"
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <button className="btn btn-outline-danger mb-5 mt-3" type="reset">Reiniciar Datos</button>
                        <button className="btn btn-outline-primary mb-5 mt-3 margenes" type="submit">Enviar</button>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

export default Checkout