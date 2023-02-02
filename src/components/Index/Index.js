import React from 'react'
import { useEffect, useState } from "react"
import { Col, Container, Row } from 'react-bootstrap'
import Carrusel from "../Carrusel/Carrusel"
import ItemList from '../ItemList/ItemList'
import { ItemListContainer } from '../itemListContainer/ItemListContainer'

const Index = () => {
  return (
    <>
        <Carrusel/>
        <Container >
            <Row>
                <Col lg={12}>
                    <h1 className=' text-center mt-4'><strong>Todos Nuestros Productos</strong></h1>
                </Col>
            </Row>
        </Container>
        <ItemListContainer/>
    </>
  )
}

export default Index