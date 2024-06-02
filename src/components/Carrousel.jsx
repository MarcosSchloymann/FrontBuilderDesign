import react from 'react';
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
          <h1>Excelente atención</h1>
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
          <h1>Productos de Primera Calidad</h1>
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
          <h1>Variedad de Productos</h1>
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
          <h1>Productos de eleavoración Propia</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

  
  export default CarrouselHome;