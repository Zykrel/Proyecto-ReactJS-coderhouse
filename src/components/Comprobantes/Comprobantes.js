import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { doc, getDoc, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from 'formik'
import ListGroup from 'react-bootstrap/ListGroup';

const Comprobantes = () => {
    const [orders, setOrders] = useState()

    const verOrden = (values) => {
        const ordenesRef = doc(db, "ordenes", values.busqueda.toString())
        getDoc(ordenesRef)
            .then((doc => {
                setOrders({ ...doc.data() })
            }))
    }

    return (
        <Container>
            <Row>
                <Col lg={6}>

                </Col>
            </Row>
            <Formik
                initialValues={{
                    busqueda: '',
                }}
                onSubmit={(values) => {
                    verOrden(values)
                }}
            >{({
                values, handleChange, handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mt-5 mb-3"
                        onChange={handleChange}
                        type="text"
                        name='busqueda'
                        value={values.busqueda}
                        placeholder='Ingrese codigo de comprobante'
                    />
                    <button type="submit" className='btn btn-outline-primary mt-2 mb-4' >Buscar comprobante</button>
                </form>
            )}
            </Formik>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {
                            orders &&
                            <div>
                                <ListGroup className='mb-5'>
                                    <ListGroup.Item>Nombre:  {orders.cliente.nombre}</ListGroup.Item>
                                    <ListGroup.Item>Dirección:  {orders.cliente.direccion}</ListGroup.Item>
                                    <ListGroup.Item>Fecha de orden:  {orders.fecha}</ListGroup.Item>
                                    <ListGroup.Item>Email:  {orders.cliente.email}</ListGroup.Item>
                                    <ListGroup.Item>Productos:  <br/>
                                        {orders.item.map((i) =><div>{i.nombre} {i.medida} cantidad: {i.cantidad}</div>)}
                                        </ListGroup.Item>
                                    <ListGroup.Item>Total:  ${orders.total}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Comprobantes