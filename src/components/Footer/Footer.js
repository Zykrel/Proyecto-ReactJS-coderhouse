import React from 'react'
import {Link} from "react-router-dom"
import insta from "../../assets/img/insta.png"
import facebook from "../../assets/img/facebook.png"
import whatsapp from "../../assets/img/icono-whatsapp.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="mt-auto bg-dark">
        <div className="text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Señores del Placard</h5>
                        <h6 className="text-white">
                            Somos Señores del Placard una mueblería dedicada a comercializar muebles de melamina,
                            haciendo énfasis en
                            ofrecer los precios más bajos del mercado.
                        </h6>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <ul className="fa-ul" style={{marginLeft: 1.65 + 'em'}}>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Guamini 2632,
                                    Puente de la noria, Ingeniero Budge</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span
                                    className="ms-2">señoresdelplacard@gmail.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+54 9 11
                                    3868-0490</span>
                            </li>
                        </ul>
                        <div className="container text-center">
                            <a href="https://www.instagram.com/sres.del.placard/" target="_blank"><img
                                    className="logo mx-1 my-3" src={insta}/></a>
                            <a href="https://www.facebook.com/senoresdel.placar" target="_blank"><img
                                    className="logo mx-1 my-3" src={facebook}/></a>
                            <a href="https://walink.co/5b41e6" target="_blank"><img className="logo mx-1 my-3"
                                    src={whatsapp}/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Nuestros horarios</h5>
                        <table className="table text-center text-white">
                            <tbody className="font-weight-normal">
                                <tr>
                                    <td>Lunes a viernes:</td>
                                    <td>10am - 17pm</td>
                                </tr>
                                <tr>
                                    <td>Sabados:</td>
                                    <td>10am - 13pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="text-center p-3">
                © 2022 Copyright:
                <a className="text-white" href="https://www.linkedin.com/in/nahuel-garcia-ba96621b7/" target="_blank">Nahuel
                    Garcia</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer