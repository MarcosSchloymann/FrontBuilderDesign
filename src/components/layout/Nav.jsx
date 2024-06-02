import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, Router } from 'react-router-dom';
import './../../styles/components/layout/Nav.css';

const NavBar = (props) => {

  return (

    <Navbar expand="lg" 
    fixed="top" 
    className="nav-nav">
      <Container >
        <img src='./img/logo_mana.png' width='auto' height='100px' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='colapso d-flex justify-content-center'>
          <Nav className='Nav-Menu'>
            <Nav.Link className="link" as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className="link" as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link className="link" as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link className="link" as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;