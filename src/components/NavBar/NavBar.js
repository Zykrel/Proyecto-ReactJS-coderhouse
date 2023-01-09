import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt="logo"
                    src={logo}
                    height="80"
                />
            </Navbar.Brand>
            <Container>
                <Nav className="ms-auto">
                    <NavLink className="nav-link" to="/Proyecto-ReactJS-coderhouse/">Inicio</NavLink>
                    <NavDropdown menuVariant="dark" title="Mas Productos" id="basic-nav-dropdown">
                    <NavLink className="nav-link" to="/Proyecto-ReactJS-coderhouse/productos/placard">
                            Placares
                        </NavLink>
                        <NavLink className="nav-link" to="/Proyecto-ReactJS-coderhouse/productos/escritorio">
                            Escritorios
                        </NavLink>
                        <NavLink className="nav-link" to="/Proyecto-ReactJS-coderhouse/productos/muebles-de-cocina">Muebles De Cocina</NavLink>
                    </NavDropdown>
                    <NavLink className="nav-link" to='/Proyecto-ReactJS-coderhouse/sobre-nosotros'>Sobre Nosotros</NavLink>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

