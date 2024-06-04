import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import './../../styles/components/layout/Nav.css';

const NavBar = (props) => {

  return (
    <Navbar bg="" expand="lg" fixed="top" className="justify-content-end Nav-Bar" data-bs-theme="light">
      <Container >
        <img src='./img/logo_mana.png' width='auto' height='100px' alt='' />
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='colapso'>
          <Nav className='Nav-Menu'>
            <Nav.Link className="link" as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className="link" as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link className="link" as={Link} to="/productos">Proyectos</Nav.Link>
            <Nav.Link className="link" as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;