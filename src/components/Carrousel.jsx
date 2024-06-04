import Carousel from 'react-bootstrap/Carousel';
import './../styles/components/layout/Carrousel.css';

function CarrouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/mana_slide1.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='boxCarrousel arriba'>
          <h1>Diseños arquitectónicos</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/mana_slide2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
            <div className='boxCarrousel medio'>
          <h1>Gestión de la Calidad de los Proyectos</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/mana_slide3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='boxCarrousel abajo'>
          <h1>Maquinarias Avanzadas</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/mana_slide.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='boxCarrousel medio'>
          <h1>Equipos multidisciplinarios</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

  
  export default CarrouselHome;