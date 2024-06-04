import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../styles/components/layout/Grid3.css';

function Grid3() {
    return (
        <Container>
            <Row>
                <Col><div className='text-center'>
                    <h1 className='GridH1'>
                        Quiénes Somos
                    </h1>
                    <hr color='black' width='300px' size='6'></hr>

                </div>
                </Col>
                <Col>
                    <p>
                        Somos una Empresa conformada por profesionales, donde nuestro principal objetivo es concluir
                        proyectos brindando excelencia y calidad.
                        Todos nuestros trabajos son integramente supervisados y dirigidos en fabrica por nuestro
                        personal altamente cualificado de hace mas de 30 años.
                    </p>
                </Col>
                <Col>
                    <p>
                        Nuestro equipo multidisciplinario se caracteriza por desarrollar, fabricar y materializar
                        proyectos integrales, es por eso que contamos con personal idóneo que se encarga de trabajar
                        con varios materiales, entre ellos están los hierros y el acero inoxidable en la fabricación para
                        garantizar la durabilidad y resistencia en nuestros productos.
                    </p></Col>
            </Row>
            <Row>
                <Col>
                    <img src='./img/quienes.jpg' width='100%' height='auto' alt='quienes'/>
                </Col>
                <Col>
                    <img src='./img/quienes1.jpg' width='100%' height='auto' alt='quienes'/>
                </Col>
                <Col>
                    <img src='./img/quienes2.jpg' width='100%' height='auto' alt='quienes'/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex align-items-center'><div className='text-center'>
                    <h1 className='GridH1'>
                        Servicios
                    </h1>
                    <hr color='#809A7D' width='300px' size='6'></hr>
                </div>
                </Col>
                <Col>
                    <h3 className='text-center'>Calidad</h3>
                    <p>
                        La calidad y la innovación son pilares fundamentales en cada etapa de nuestro
                        proceso de producción. Trabajamos en estrecha colaboración con nuestros clientes para
                        comprender sus necesidades y ofrecer soluciones personalizadas que superen sus expectativas.
                    </p>
                </Col>
                <Col>
                    <h3 className='text-center'>Acompañamiento</h3>
                    <p>
                        Somos su socio ideal para llevar a cabo proyectos de cualquier envergadura con
                        profesionalismo, calidad y compromiso. Nos enorgullece ser parte de cada etapa, desde la
                        concepción hasta la culminación de cada proyecto y estamos comprometidos a brindarle una
                        experiencia de compra satisfactoria.
                    </p>
                </Col>
            </Row>
            <Row><div className='text-center'>
                <h1 className='GridH1'>
                    Proyectos
                </h1>
                <hr color='#809A7D' width='300px' size='6'></hr>
            </div>
            </Row>
            <Row>
                <Col>
                    <div className='text-center'>
                        <img src='./img/Herramienta.jpg' height='auto' width='300px' alt='quienes'/>
                        <h2>Tiendas</h2>
                    </div>
                </Col>
                <Col>
                    <div className='text-center'>
                        <img src='./img/1063308-704073bd.png' height='auto' width='300px' alt='quienes'/>
                        <h2>Pastelerías</h2>
                    </div>
                </Col>
                <Col>
                    <div className='text-center'>
                        <img src='./img/3322490-312a2b27.png' height='auto' width='320px' alt='quienes'/>
                        <h2>Talleres</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Grid3;