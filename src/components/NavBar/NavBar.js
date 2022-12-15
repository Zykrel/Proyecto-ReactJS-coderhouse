import { Nav, Navbar, Container, NavLink, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <img
                    alt="logo"
                    src={logo}
                    height="80"
                />
            </Navbar.Brand>
            <Container>
                <Nav className="ms-auto">
                    <NavLink href="#">Inicio</NavLink>
                    <NavDropdown menuVariant="dark" title="Mas Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Interiores</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Escritorios
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Muebles De Cocina</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="#">Sobre Nosotros</NavLink>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

