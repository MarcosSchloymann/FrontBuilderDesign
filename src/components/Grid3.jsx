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
                    <hr color='#809A7D' width='300px' size='6'></hr>

                </div>
                </Col>
                <Col>
                    <p>
                        Somos una empresa dedicada a la fabricación de panificados.
                        Tenemos una amplia variedad de productos de elaboración propia,
                        pan, facturas, bizcochos.
                    </p>
                </Col>
                <Col>
                    <p>
                        Contamos con muchos años de experiencia en el rubro.
                        Nuestra misión es mantener satisfechos a nuestros clientes brindándoles las exquisiteces preparadas por los maestros pasteleros de maná.
                        Además, por nuestra calidad de atención y servicio nos siguen eligiendo como el primer día.
                    </p></Col>
            </Row>
            <Row>
                <Col>
                    <img src='./img/quienes.jpg' width='100%' height='auto' />
                </Col>
                <Col>
                    <img src='./img/quienes1.jpg' width='100%' height='auto' />
                </Col>
                <Col>
                    <img src='./img/quienes2.jpg' width='100%' height='auto' />
                </Col>
            </Row>
            <Row>
                <Col><div className='text-center'>
                    <h1 className='GridH1'>
                        Productos
                    </h1>
                    <hr color='#809A7D' width='300px' size='6'></hr>
                </div>
                </Col>
                <Col>
                    <h3 className='text-center'>Elaboración Artesanal</h3>
                    <p>
                        Combinamos la tradición con lo mejor de la modernidad para llegar a las mesas de todos los hogares con productos de panadería saludables, para todos los momentos del día.
                        Productos al alcance de todas las familias. El buen pan es para todos.
                        Hacer un buen pan artesanal como el que hacemos en Maná Panadería es más sencillo de lo que te imaginas.
                        La complejidad está en lograr el producto que deseamos, con la variedad y volumen que ofrecemos.
                    </p>
                </Col>
                <Col>
                    <h3 className='text-center'>Control de calidad</h3>
                    <p>
                        Nuestro secreto está en el manejo maestro de la fermentación,
                        el uso de diferentes prefermentos y el cuidado en el manejo de la masa con equipos
                        diseñados para este tipo de procesos.
                        Parte de la historia y de la magia de “Maná Panadería” es nuestra Masa Madre;
                        La masa madre se debe cuidar meticulosamente para mantener sus características,
                        de esta forma logramos año tras año la calidad de nuestros productos terminados.
                    </p>
                </Col>
            </Row>
            <Row><div className='text-center'>
                <h1 className='GridH1'>
                    Productos
                </h1>
                <hr color='#809A7D' width='300px' size='6'></hr>
            </div>
            </Row>
            <Row>
                <Col>
                    <div className='text-center'>
                        <img src='./img/Herramienta.jpg' height='auto' width='300px' />
                        <h2>Panadería</h2>
                    </div>
                </Col>
                <Col>
                    <div className='text-center'>
                        <img src='./img/1063308-704073bd.png' height='auto' width='300px' />
                        <h2>Pastelería</h2>
                    </div>
                </Col>
                <Col>
                    <div className='text-center'>
                        <img src='./img/3322490-312a2b27.png' height='auto' width='320px' />
                        <h2>Salados</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Grid3;