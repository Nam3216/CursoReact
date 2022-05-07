import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./estiloCarousel.css"

const CarouselJs=()=>{
// className="d-block w-100" style={{ width: 1000,height: 600 }}
    return(
        <div className="carousel-container" style={{ display: 'block'   }}>
      
      <Carousel >
        <Carousel.Item interval={2000}>
          <img
            
src="https://st3.depositphotos.com/1007995/34935/i/450/depositphotos_349353872-stock-photo-young-fashion-businessman-suit-holding.jpg"
            alt="Image One"
            className="carousel-image"
          />
          <Carousel.Caption className="text-carousel">
            <h3>Toda la Moda que buscas.</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image" 
src="https://img.freepik.com/foto-gratis/imagen-moda-estilo-callejero-increible-moda-joven-mujer-bonita-posando-calle_291049-2.jpg?w=2000"
            alt="Image Two"
          />
          <Carousel.Caption className="text-carousel">
            <h3>En un solo lugar.</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-image" 
src="https://fotos.perfil.com/2020/08/20/trim/1280/720/polemica-sobre-la-refinanciacion-de-las-tarjetas-de-credito-1004338.jpg"
            alt="Image Two"
          />
          <Carousel.Caption className="text-carousel">
            <h3>!Y con las mejores promociones!</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
     
      </Carousel>
    </div>
    )
}
export default CarouselJs;