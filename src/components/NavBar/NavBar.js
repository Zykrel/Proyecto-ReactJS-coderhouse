import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom"
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";
import './NavBar.css'
export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <img
                    alt="logo"
                    src={logo}
                    height="80"
                />
            </Link>
            <Container>
                <Nav className="ms-auto margenes">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavDropdown menuVariant="dark" title="Mas Productos" id="basic-nav-dropdown">
                    <NavLink className="nav-link" to="/productos/placard">
                            Placares
                        </NavLink>
                        <NavLink className="nav-link" to="/productos/escritorio">
                            Escritorios
                        </NavLink>
                        <NavLink className="nav-link" to="/productos/muebles-de-cocina">Muebles De Cocina</NavLink>
                    </NavDropdown>
                    <NavLink className="nav-link" to='/sobre-nosotros'>Sobre Nosotros</NavLink>
                    <NavLink className="nav-link" to='/comprobantes'>Tus Comprobantes</NavLink>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

