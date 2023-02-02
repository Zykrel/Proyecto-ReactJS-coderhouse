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
import Swal from 'sweetalert2'

const schema = Yup.object().shape({
    nombre: Yup.string().min(5, 'Mínimo 4 caracteres').max(20, 'Máximo 20 caracteres').required('Campo requerido!'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(25, 'Máximo 25 caracteres').required('Campo requerido!'),
    email: Yup.string().email('El email no es válido').required('Campo requerido!'),
    tarjeta: Yup.string().matches('^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$', 'Tarjeta no válida').required('Campo requerido!'),
    vencimiento: Yup.string().matches('([0-1]{1}[0-9]{1}\/[0-9]{2})', 'Fecha no valida').required('Campo requerido!')

})


const Checkout = () => {
    const { cart, carritoVacio, totalDelCarrito } = useCartContext()
    const [ ordenarId, setOrdenarId ] = useState(null)

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
                    <Col lg={12} className='text-center mt-5 mb-4'><h3>Tu Compra ha sido Realizada</h3></Col>
                </Row>
                <Row>
                    <Col lg={12} className='mb-3 mt-3 text-center'><span><strong>Tu codigo es: {ordenarId}</strong></span></Col>
                </Row>
                <Link className='btn btn-outline-info mb-5 mt-5 centrarBoton' to="/">Volver al inicio</Link>
        </Container>
        )
    }
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    return (
        <Container>
            <Row>
                <Col className='text-center mt-4' lg={12}><strong><h1>Terminar Compra</h1></strong></Col>
            </Row>
            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                    tarjeta: '',
                    seguridad: '',
                    vencimiento:''
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
                            placeholder="Ingresar nombre completo"
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <input
                            className="form-control mb-3"
                            onChange={handleChange}
                            type="text"
                            name="direccion"
                            value={values.direccion}
                            placeholder="Ingresar dirección completa"
                        />
                        {errors.direccion && <p>{errors.direccion}</p>}
                        <input
                            className="form-control mb-3"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Ingresar email"
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <Row>
                            <Col lg={5}>
                                    <input
                                        className="form-control mb-3"
                                        onChange={handleChange}
                                        maxLength="16"
                                        type="text"
                                        name="tarjeta"
                                        value={values.tarjeta}
                                        placeholder="Ingresar numero de tarjeta"
                                    />
                                    {errors.tarjeta && <p>{errors.tarjeta}</p>}
                            </Col>
                            <Col lg={3}>
                            <input
                                        className="form-control mb-3"
                                        onChange={handleChange}
                                        type="text"
                                        minLength="3"
                                        maxLength="4"
                                        name="seguridad"
                                        value={values.seguridad}
                                        placeholder="Ingresar codigo de seguridad"
                                    />
                                    {errors.seguridad && <p>{errors.seguridad}</p>}
                            </Col>
                            <Col lg={3}>
                                    <input
                                        className="form-control mb-3"
                                        onChange={handleChange}
                                        maxLength="5"
                                        type="text"
                                        name="vencimiento"
                                        value={values.vencimiento}
                                        placeholder="Ingresar fecha de vencimiento"
                                    />
                                    {errors.vencimiento && <p>{errors.vencimiento}</p>}
                            </Col>
                        </Row>
                        <Link className="btn btn-outline-danger mb-5 mt-3 marginLeft" to="/">Volver a inicio</Link>
                        <button className="btn btn-outline-primary mb-5 mt-3 margenes" type="submit">Finalizar Compra</button>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

export default Checkout
