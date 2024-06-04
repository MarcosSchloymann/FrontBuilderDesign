import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../styles/components/layout/Footer.css';

function Footer() {
  return (
    <div className='estilos'>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className='footer'><img src='./img/logo_mana_1.png' height='80' width='auto' /></div>
            <div className='iconos'>
              <a href='' target="_blank" className='ahref ahrefa'><i class="fa-brands fa-square-facebook"></i></a>
              <a href='' target="_blank" className='ahref ahrefa'><i class="fa-brands fa-whatsapp"></i></a>
              <a href='' target="_blank" className='ahref ahrefa'><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div className='fondo'>
            ©2024 • <a href="" className='ahref'>Lema</a> • Todos los derechos reservados
          </div>
          </Col>
          <Col className='qr-box'>
          <img className="qr" src="./img/QR.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;