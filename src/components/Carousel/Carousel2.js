import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./estiloCarousel.css"
//https://fotos.perfil.com/2020/08/20/trim/1280/720/polemica-sobre-la-refinanciacion-de-las-tarjetas-de-credito-1004338.jpg
const Carousel2 = () => {
  return (
    <div >
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://st3.depositphotos.com/1007995/34935/i/450/depositphotos_349353872-stock-photo-young-fashion-businessman-suit-holding.jpg"
      alt="First slide"
     
    
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/foto-gratis/imagen-moda-estilo-callejero-increible-moda-joven-mujer-bonita-posando-calle_291049-2.jpg?w=2000"
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fotos.perfil.com/2020/08/20/trim/1280/720/polemica-sobre-la-refinanciacion-de-las-tarjetas-de-credito-1004338.jpg"
      alt="Third slide"
   
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}

export default Carousel2;
