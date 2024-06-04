import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./../styles/components/pages/NosotrosPage.css";

function NosotrosPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='nosotros GridH1'>
                        La Empresa
                    </h1>
                    <hr color='black' size='6'></hr>

                    <p className="texto-empresa">
                        Somos una Empresa conformada por profesionales, donde nuestro principal objetivo es concluir
                        proyectos brindando excelencia y calidad.
                        Todos nuestros trabajos son integramente supervisados y dirigidos en fabrica por nuestro
                        personal altamente cualificado de hace mas de 30 años.
                        Nuestro equipo multidisciplinario se caracteriza por desarrollar, fabricar y materializar
                        proyectos integrales, es por eso que contamos con personal idóneo que se encarga de trabajar
                        con varios materiales, entre ellos están los hierros y el acero inoxidable en la fabricación para
                        garantizar la durabilidad y resistencia en nuestros productos. También trabajamos con equipos
                        de refrigeración, que se adaptan a los estándares de calidad e higiene y contienen aberturas,
                        vidrios TVH/DVH. En el sector de carpintería utilizamos MDF para el armado y ensamblado del
                        mobiliario y para darle una mejor terminación enviamos a nuestra cabina de pintura que se
                        encuentra preparada para una mejor terminación en las piezas.
                        La fábrica cuenta con una amplia variedad de máquinas de avanzada tecnología como
                        cortadora láser, plegadoras, fresadoras CNC, escuadradoras, pegadoras de canto y prensas para
                        puertas, de esta manera podemos llevar a cabo proyectos de cualquier escala con eficiencia y
                        precisión.
                        La calidad y la innovación son pilares fundamentales en cada etapa de nuestro
                        proceso de producción. Trabajamos en estrecha colaboración con nuestros clientes para
                        comprender sus necesidades y ofrecer soluciones personalizadas que superen sus expectativas.
                        Somos su socio ideal para llevar a cabo proyectos de cualquier envergadura con
                        profesionalismo, calidad y compromiso. Nos enorgullece ser parte de cada etapa, desde la
                        concepción hasta la culminación de cada proyecto y estamos comprometidos a brindarle una
                        experiencia de compra satisfactoria.
                        ¡Nos gustaría ser parte de tu proyecto!
                    </p>

                    <img className="nosotros-img" src="./img/nosotrosImg.jpg" alt="" />

                </Col>

            </Row>
        </Container>

    )
}

export default NosotrosPage;