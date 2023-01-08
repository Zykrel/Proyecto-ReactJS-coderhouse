import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt="logo"
                    src={logo}
                    height="80"
                />
            </Navbar.Brand>
            <Container>
                <Nav className="ms-auto">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavDropdown menuVariant="dark" title="Mas Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">
                            Escritorios
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Muebles De Cocina</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink className="nav-link" to='/sobre-nosotros'>Sobre Nosotros</NavLink>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

